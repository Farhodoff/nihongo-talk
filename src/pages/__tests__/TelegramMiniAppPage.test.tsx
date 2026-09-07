import { render } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { TelegramMiniAppPage } from '../TelegramMiniAppPage';
import * as telegramAuth from '../../utils/telegramAuth';

describe('TelegramMiniAppPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('initializes Telegram auth and seamlessly redirects to /jlpt (the real app)', () => {
    const initSpy = vi.spyOn(telegramAuth, 'initTelegramAuth').mockImplementation(() => null);

    const { container } = render(
      <MemoryRouter initialEntries={['/twa']}>
        <Routes>
          <Route path="/twa" element={<TelegramMiniAppPage />} />
          <Route path="/jlpt" element={<div data-testid="jlpt-hub">JLPT Master Hub</div>} />
        </Routes>
      </MemoryRouter>,
    );

    expect(initSpy).toHaveBeenCalled();
    expect(container.querySelector('[data-testid="jlpt-hub"]')).toBeInTheDocument();
  });
});
