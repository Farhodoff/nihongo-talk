# Changelog

All notable changes to the Nihongo Talk (Study Planner) platform will be documented in this file.

## [1.1.0] - 2026-09-03

### Added

- **AI Voice Speed Selection**: Added interactive 0.8x (slow/clear), 1.0x (normal), and 1.2x (fast) playback speed toggle in Speaking Coach Top Bar (`CoachTopBar.tsx`), controlling Web Audio API, HTML5 Audio, and native SpeechSynthesis dynamically.
- **Japanese Pitch Accent Visualizer**: Tokyo dialect mora segmentation and pitch pattern analysis (`Heiban`, `Atamadaka`, `Nakadaka`, `Odaka`) with high-resolution interactive SVG contours, downstep indicators, mora grid, and audio replay (`PitchAccentService.ts`, `PitchAccentModal.tsx`).
- **Session Report PNG & PDF Export**: High-resolution 1200x630 social share card generation via HTML5 Canvas (PNG export) and print-ready iframe PDF export with strict XSS sanitization (`reportExport.ts`, `SessionReportModal.tsx`).
- **Real-time Synchronized Speaking Coach**: Sentence-level incremental streaming displaying coach text dynamically in real time alongside audio playback, eliminating silent delays.

### Fixed

- **Edge Function SSE Token Parsing**: Resolved streaming JSON envelope unpacking in `streamDeepSeekTokens` (`deepseek.ts`), ensuring dynamic AI responses are correctly extracted without falling back to static strings.
- **TTS Latency Optimization**: Streamlined `/api/tts` auth header resolution and zero-delay in-memory caching in `useTTS.ts`.

### Testing & Quality Assurance

- 128 test files and 1,258 unit tests passing (0 failures).
- 4/4 Playwright E2E suites passing.
- 0 TypeScript errors and 0 ESLint warnings.
