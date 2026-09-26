// Service worker minimal : rend le site "installable".
// Il ne met rien en cache pour l'instant afin que les mystères du jour
// et le classement restent toujours à jour depuis Supabase.
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => self.clients.claim());
self.addEventListener("fetch", () => {});
