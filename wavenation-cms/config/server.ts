export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('STRAPI_PUBLIC_URL', 'https://api.wavenation.online'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    // This lets you mount the admin UI at `/admin` (default) or whatever path you choose
    url: env('STRAPI_ADMIN_PATH', '/admin'),
  },
});

