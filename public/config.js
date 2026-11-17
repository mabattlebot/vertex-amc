// Where the AI backend (server.js) lives. Leave empty when the page is served by server.js itself
// (local or Render): the app then calls /api/* on the same site.
// The GitHub Pages workflow replaces this line with the VERTEX_API_URL repository variable.
window.VERTEX_API = '';

// Accounts and saved progress (Supabase). The publishable key is designed to be public: what each
// visitor can read or change is enforced by the row level security rules in supabase/schema.sql.
window.VERTEX_SUPABASE = {
  url: 'https://qruwzwcxzjhqxdiotyvg.supabase.co',
  key: 'sb_publishable_X-Dw7_8ZxIRzmmaU2FsJjA_7WAI4WZ4'
};
