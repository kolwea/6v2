import { createClient } from "@supabase/supabase-js";
import { env } from "~/env";

const supabaseUrl = env.SUPABASE_API_URL;
const supabaseKey = env.SUPABASE_KEY;
const client = createClient(supabaseUrl, supabaseKey)

export const supabaseClient = client ;
