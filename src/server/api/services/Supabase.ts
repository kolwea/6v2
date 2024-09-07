import { createClient } from "@supabase/supabase-js";
import { env } from "~/env";

const supabaseUrl = env.SUPABASE_API_URL;
const supabaseKey = env.SUPABASE_KEY;
const client = createClient(supabaseUrl, supabaseKey)

// client.auth.onAuthStateChange((event, session) => {
//     if (session?.provider_token) {
//       window.localStorage.setItem('oauth_provider_token', session.provider_token)
//     }
  
//     if (session?.provider_refresh_token) {
//       window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token)
//     }
  
//     if (event === 'SIGNED_OUT') {
//       window.localStorage.removeItem('oauth_provider_token')
//       window.localStorage.removeItem('oauth_provider_refresh_token')
//     }
//   })

export const supabaseClient = client ;
