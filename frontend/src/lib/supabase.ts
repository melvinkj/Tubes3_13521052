import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hredeexujnmpkmlidzrg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyZWRlZXh1am5tcGttbGlkenJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMjQxMzYsImV4cCI6MTk5ODgwMDEzNn0.igGTfiHVNkdnuhm6732OcZGFB55ldnewCBU8Er-ZYgA'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase