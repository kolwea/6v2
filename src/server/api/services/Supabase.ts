
import { createClient } from '@supabase/supabase-js'
import { env } from '~/env'

const supabaseUrl = env.SUPABASE_API_URL
const supabaseKey = env.SUPABASE_KEY

export const supabaseClient = createClient(supabaseUrl, supabaseKey)