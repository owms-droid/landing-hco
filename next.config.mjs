/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false
  },
  typescript: {
    ignoreBuildErrors: false
  },
  images: {
    unoptimized: false
  },
  reactStrictMode: false
}

export default nextConfig
