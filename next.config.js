/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    // allow static svg from /public
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
