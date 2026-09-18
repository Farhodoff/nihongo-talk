/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare const __APP_BUILD_TIMESTAMP__: number;
declare const __APP_VERSION__: string;

interface ImportMetaEnv {
  readonly VITE_TELEGRAM_DATASET_CHAT_ID?: string;
  readonly VITE_SUPABASE_URL?: string;
  readonly VITE_SUPABASE_ANON_KEY?: string;
  readonly [key: string]: any;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
