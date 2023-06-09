import { Database } from "@/types/schema";
import { createClient } from "@supabase/supabase-js";

const options = {
  auth: {
    persistSession: false,
  },
};

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ANON_KEY,
  options
);
