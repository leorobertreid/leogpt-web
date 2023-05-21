/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    // exposed api key on the frontend, but no one is really going to use the site anyway, so it's probably fine.
    ELEVEN_LABS_API_KEY: 'a01a9bc2477ef196c75c80f8d2ae568b',
    BACKEND_URL: 'https://backend-tmhm8.ondigitalocean.app/'
  }
}

module.exports = nextConfig
