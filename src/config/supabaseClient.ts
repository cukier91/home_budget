import { createClient } from "@supabase/supabase-js";

if (!process.env.REACT_APP_API_KEY) {
  throw new Error("Provide supabase anon key");
}

const supabaseUrl = "https://tpmnmzrceprqsdushopz.supabase.co";
const supabaseAnonKey = process.env.REACT_APP_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);