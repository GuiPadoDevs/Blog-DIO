import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://kedymzynezbgntzvzpnh.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlZHltenluZXpiZ250enZ6cG5oIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTczMjUwOSwiZXhwIjoyMDQ1MzA4NTA5fQ.73A_Q9yWqb67LLgh1aiuVyR9y00A-rCSyUrtgUcJh_Q",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlZHltenluZXpiZ250enZ6cG5oIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTczMjUwOSwiZXhwIjoyMDQ1MzA4NTA5fQ.73A_Q9yWqb67LLgh1aiuVyR9y00A-rCSyUrtgUcJh_Q"
    }
})