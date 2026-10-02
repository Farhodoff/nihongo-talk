import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import os from 'node:os';

const execFileAsync = promisify(execFile);

const AUDIO_DIR = path.resolve('public/audio');
const TARGET_BITRATE = '64k';
const TARGET_CHANNELS = '1'; // Mono

function getAllAudioFiles(dir) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllAudioFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.mp3')) {
      results.push(fullPath);
    }
  }
  return results;
}

async function getAudioInfo(filePath) {
  try {
    const { stdout } = await execFileAsync('ffprobe', [
      '-v',
      'error',
      '-show_entries',
      'stream=bit_rate,channels',
      '-of',
      'default=noprint_wrappers=1',
      filePath,
    ]);
    const lines = stdout.trim().split('\n');
    let bitrate = 0;
    let channels = 2;
    for (const line of lines) {
      if (line.startsWith('bit_rate=')) {
        bitrate = parseInt(line.replace('bit_rate=', ''), 10) || 0;
      }
      if (line.startsWith('channels=')) {
        channels = parseInt(line.replace('channels=', ''), 10) || 2;
      }
    }
    return { bitrate, channels };
  } catch (err) {
    return { bitrate: 320000, channels: 2 };
  }
}

async function optimizeFile(filePath) {
  const statBefore = fs.statSync(filePath);
  const sizeBefore = statBefore.size;

  const { bitrate, channels } = await getAudioInfo(filePath);

  // If already <= 68k and mono, skip
  if (bitrate <= 68000 && channels === 1) {
    return { filePath, sizeBefore, sizeAfter: sizeBefore, skipped: true };
  }

  const tmpPath = `${filePath}.tmp.mp3`;
  try {
    await execFileAsync('ffmpeg', [
      '-v',
      'error',
      '-i',
      filePath,
      '-b:a',
      TARGET_BITRATE,
      '-ac',
      TARGET_CHANNELS,
      tmpPath,
      '-y',
    ]);

    const statAfter = fs.statSync(tmpPath);
    const sizeAfter = statAfter.size;

    // Only overwrite if size actually decreased
    if (sizeAfter < sizeBefore) {
      fs.renameSync(tmpPath, filePath);
      return { filePath, sizeBefore, sizeAfter, skipped: false };
    } else {
      fs.unlinkSync(tmpPath);
      return { filePath, sizeBefore, sizeAfter: sizeBefore, skipped: true };
    }
  } catch (err) {
    if (fs.existsSync(tmpPath)) {
      try {
        fs.unlinkSync(tmpPath);
      } catch {}
    }
    console.error(`Failed to optimize ${filePath}:`, err.message);
    return { filePath, sizeBefore, sizeAfter: sizeBefore, error: err.message };
  }
}

async function main() {
  console.log('Scanning audio files in:', AUDIO_DIR);
  const files = getAllAudioFiles(AUDIO_DIR);
  console.log(`Found ${files.length} audio files.`);

  let totalSizeBefore = 0;
  for (const f of files) {
    totalSizeBefore += fs.statSync(f).size;
  }
  console.log(`Initial total size: ${(totalSizeBefore / 1024 / 1024).toFixed(2)} MB`);

  const concurrency = Math.max(2, os.cpus().length);
  console.log(`Optimizing with concurrency: ${concurrency}...`);

  let completed = 0;
  let totalSizeAfter = 0;
  let optimizedCount = 0;

  async function worker(queue) {
    while (queue.length > 0) {
      const file = queue.shift();
      const res = await optimizeFile(file);
      completed++;
      totalSizeAfter += res.sizeAfter;
      if (!res.skipped && !res.error) {
        optimizedCount++;
      }
      if (completed % 25 === 0 || completed === files.length) {
        process.stdout.write(
          `\rProgress: ${completed}/${files.length} files processed (${optimizedCount} compressed)...`,
        );
      }
    }
  }

  const queue = [...files];
  const workers = Array.from({ length: concurrency }, () => worker(queue));
  await Promise.all(workers);

  console.log('\n\n--- Optimization Summary ---');
  console.log(`Total files processed: ${completed}`);
  console.log(`Files compressed: ${optimizedCount}`);
  console.log(`Original Size: ${(totalSizeBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`New Size:      ${(totalSizeAfter / 1024 / 1024).toFixed(2)} MB`);
  const savedMB = (totalSizeBefore - totalSizeAfter) / 1024 / 1024;
  const savedPercent = ((savedMB / (totalSizeBefore / 1024 / 1024)) * 100).toFixed(1);
  console.log(`Space Saved:   ${savedMB.toFixed(2)} MB (${savedPercent}%)`);
}

main().catch(console.error);
