import { describe, it, expect, vi } from 'vitest';
import { logger } from '../logger';

describe('logger', () => {
  it('should redact sensitive tokens in warnings and errors', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    logger.warn('AuthTest', 'Failed with Bearer eyJhbGciOiJIUzI1NiJ9.token123');
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('[AuthTest] Failed with Bearer [REDACTED]'),
    );

    logger.error('PaymentTest', 'Crash with key sk-abcdef1234567890abcdef');
    expect(errorSpy).toHaveBeenCalledWith(
      expect.stringContaining('[PaymentTest] Crash with key sk-[REDACTED]'),
    );

    warnSpy.mockRestore();
    errorSpy.mockRestore();
  });

  it('should safely handle non-string messages and Error instances', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const testErr = new Error('Database down postgresql://user:secret123@host:5432/db');

    logger.error('DB', testErr);
    expect(errorSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        '[DB] Database down postgresql://user:[REDACTED_PASSWORD]@host:5432/db',
      ),
    );

    errorSpy.mockRestore();
  });
});
