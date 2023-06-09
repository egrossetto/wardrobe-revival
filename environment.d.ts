declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_PROJECT_URL: string;
      NEXT_PUBLIC_SUPABASE_PROJECT_ANON_KEY: string;
      NEXT_PUBLIC_SUPABASE_IMAGE_URL: string;
      NEXT_PUBLIC_PHONE_NUMBER: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
