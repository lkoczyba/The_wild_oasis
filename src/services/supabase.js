import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vrwagcypjsilrnjuldsh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyd2FnY3lwanNpbHJuanVsZHNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0MzczMjcsImV4cCI6MjAxNzAxMzMyN30.mpCmMbP-L3paJw6X4sbUxbp1zEXYIylJRCO4qFKUSbo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
