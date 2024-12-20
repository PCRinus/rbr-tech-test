/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_TECH_TEST_01_API_URL: string;
  readonly VITE_TECH_TEST_01_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
