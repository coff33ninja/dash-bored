// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://rpswydewnmabrwtmyorj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwc3d5ZGV3bm1hYnJ3dG15b3JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI0MzA4MTQsImV4cCI6MjA0ODAwNjgxNH0.y_pnM-ItUhZ23tswKxxurByK_PSDgFg6W4QO3zrtQRs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);