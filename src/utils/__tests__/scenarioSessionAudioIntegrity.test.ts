import { describe, it, expect } from 'vitest';
import { DEFAULT_SCENARIOS } from '../../data/defaultScenarios';
import { isAcousticEcho } from '../echoFilter';

describe('Scenario Session Audio and Echo Suppression Integrity Tests', () => {
  it('1. All scenarios must have valid non-empty opening lines in their target language', () => {
    for (const scenario of DEFAULT_SCENARIOS) {
      const isEn = scenario.language === 'en';
      if (isEn) {
        expect(scenario.opening_line_en).toBeDefined();
        expect(scenario.opening_line_en!.trim().length).toBeGreaterThan(5);
      } else {
        expect(scenario.opening_line_ja).toBeDefined();
        expect(scenario.opening_line_ja!.trim().length).toBeGreaterThan(5);
      }
    }
  });

  it('2. Detects acoustic echo loopback for Japanese scenario openings', () => {
    const restaurantScenario = DEFAULT_SCENARIOS.find((s) => s.id === 'restaurant');
    expect(restaurantScenario).toBeDefined();
    const coachLine = restaurantScenario!.opening_line_ja!;

    // Full loopback from speaker
    expect(isAcousticEcho(coachLine, coachLine)).toBe(true);

    // Partial substring (at least 8 chars in Japanese) picked up by mic
    const subChunk = coachLine.slice(0, 14);
    expect(isAcousticEcho(subChunk, coachLine)).toBe(true);
  });

  it('3. Does NOT flag genuine user answers to scenario prompts as echo', () => {
    const restaurantScenario = DEFAULT_SCENARIOS.find((s) => s.id === 'restaurant');
    const coachLine = restaurantScenario!.opening_line_ja!;

    // Real student responses to the restaurant prompt
    expect(isAcousticEcho('2人です。テーブル席をお願いします。', coachLine)).toBe(false);
    expect(isAcousticEcho('予約したファルホドと申します。', coachLine)).toBe(false);
    expect(isAcousticEcho('禁煙席は空いていますか？', coachLine)).toBe(false);
  });

  it('4. Detects acoustic echo loopback for English scenario openings', () => {
    const checkinScenario = DEFAULT_SCENARIOS.find((s) => s.id === 'hotel_concierge_checkin');
    expect(checkinScenario).toBeDefined();
    const coachLine = checkinScenario!.opening_line_en!;

    // Full loopback
    expect(isAcousticEcho(coachLine, coachLine)).toBe(true);

    // Partial substring picked up by mic
    const subChunk = coachLine.slice(0, 20);
    expect(isAcousticEcho(subChunk, coachLine)).toBe(true);

    // Genuine user reply
    expect(isAcousticEcho('Yes, I booked a double room under John Smith.', coachLine)).toBe(false);
    expect(isAcousticEcho('Could you check under my name, Farhod?', coachLine)).toBe(false);
  });
});
