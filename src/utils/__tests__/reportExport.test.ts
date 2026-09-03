import { describe, it, expect, vi } from 'vitest';
import {
  generateReportShareCard,
  downloadReportAsPNG,
  printReportViaIframe,
} from '../reportExport';
import { SessionAnalysisReport } from '../ai';

describe('reportExport', () => {
  const mockReport: SessionAnalysisReport = {
    fluency_score: 8.0,
    lexical_score: 7.5,
    grammar_score: 8.5,
    pronunciation_score: 8.0,
    overall_score: 8.0,
    user_level_jp: 'JLPT N2',
    user_level_eng: 'CEFR C1',
    overall_feedback: "Ajoyib natija! Nutqingiz juda ravon va tushunarli bo'ldi.",
    strengths: ['Aniq talaffuz', "Keng lug'at zaxirasi"],
    areas_to_improve: ['Kichik zarrachalar xatosi'],
    pronunciation_feedback: 'Yaxshi talaffuz',
    pronunciation_errors: [],
    grammar_corrections: [
      {
        original: 'watashi wa ikimasu',
        corrected: 'watashi ga ikimasu',
        explanation: "Subyekt ta'kidi",
      },
    ],
    better_vocabulary: [
      { original: 'ii', suggested: 'subarashii', context: 'Sifatni kuchaytirish' },
    ],
  };

  it('renders a valid retina canvas share card', () => {
    const canvas = generateReportShareCard(mockReport, 'Sensei Tanaka');
    expect(canvas).toBeDefined();
    expect(canvas.width).toBe(2400);
    expect(canvas.height).toBe(1260);
  });

  it('triggers download anchor for PNG image', async () => {
    const clickMock = vi.fn();
    const originalCreateElement = document.createElement.bind(document);

    vi.spyOn(document, 'createElement').mockImplementation((tag: string) => {
      const el = originalCreateElement(tag);
      if (tag === 'a') {
        el.click = clickMock;
      }
      return el;
    });

    await downloadReportAsPNG(mockReport, 'Sensei Tanaka');
    expect(clickMock).toHaveBeenCalled();
    vi.restoreAllMocks();
  });

  it('injects print iframe and triggers print cleanly without popup blocker', () => {
    printReportViaIframe(mockReport, 'Sensei Tanaka');
    const iframe = document.getElementById('print-report-frame');
    expect(iframe).not.toBeNull();
    expect(iframe?.tagName).toBe('IFRAME');
  });
});
