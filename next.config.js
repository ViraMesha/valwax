/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-iev1-1.cdninstagram.com',
        // port: '',
        // pathname: '',
      },
    ],
  },
}

module.exports = nextConfig
