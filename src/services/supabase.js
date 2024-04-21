import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lwssndpcwyyunwskncdo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3c3NuZHBjd3l5dW53c2tuY2RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MzI3NjAsImV4cCI6MjAyODEwODc2MH0.-bqcmAk9ETj22-CaDEWyxiA14jmNIlQsdKm24kbixn4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
