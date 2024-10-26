/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TECH_TEST_01_API_URL: string;
  readonly VITE_TECH_TEST_01_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
