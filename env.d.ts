interface ImportMetaEnv {
  PORT: 3000 | 4000 | 8080;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
