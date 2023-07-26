import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ucwnpmkhvljtmvdksuee.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjd25wbWtodmxqdG12ZGtzdWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzNjc2ODcsImV4cCI6MjAwNTk0MzY4N30.mYOW4SsgBdR8aswjneF4oJ3CIB1-APLQQXnpfpQedxY"
);
