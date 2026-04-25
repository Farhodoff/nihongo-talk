import { vi } from 'vitest';

// Har qanday metodni zanjirsimon chaqirish imkonini beruvchi proxy mock
const createMockChain = (resolvedValue: any = { data: [], error: null }) => {
  const handler: ProxyHandler<any> = {
    get(target, prop) {
      if (prop === 'then') {
        return (resolve: any) => Promise.resolve(resolvedValue).then(resolve);
      }
      if (typeof target[prop] === 'function') {
        return target[prop];
      }
      return (..._args: any[]) => new Proxy(target, handler);
    }
  };
  
  const mockObj = {
    select: vi.fn().mockReturnThis(),
    insert: vi.fn().mockResolvedValue({ data: null, error: null }),
    upsert: vi.fn().mockResolvedValue({ data: null, error: null }),
    update: vi.fn().mockResolvedValue({ data: null, error: null }),
    delete: vi.fn().mockResolvedValue({ data: null, error: null }),
    eq: vi.fn().mockReturnThis(),
    order: vi.fn().mockReturnThis(),
    limit: vi.fn().mockReturnThis(),
    single: vi.fn().mockResolvedValue({ data: null, error: null }),
  };

  return new Proxy(mockObj, handler);
};

export const supabaseMock = {
  auth: {
    getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
    getUser: vi.fn().mockResolvedValue({ data: { user: { id: 'test-user', user_metadata: { full_name: 'Test User' } } }, error: null }),
    onAuthStateChange: vi.fn(() => ({ data: { subscription: { unsubscribe: vi.fn() } } })),
  },
  from: vi.fn(() => createMockChain()),
  channel: vi.fn(() => ({
    on: vi.fn().mockReturnThis(),
    subscribe: vi.fn().mockReturnThis(),
    send: vi.fn().mockResolvedValue(null),
  })),
  removeChannel: vi.fn(),
};

vi.mock('../lib/supabase', () => ({
  supabase: supabaseMock,
}));
