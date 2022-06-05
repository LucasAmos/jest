declare global {
  namespace NodeJS {
    interface ProcessEnv {
      WEBHOOK_URL: string; // this is the line you want
    }
  }
}

export {};
