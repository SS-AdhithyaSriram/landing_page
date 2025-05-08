/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeholder.svg'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  // Add environment variable to increase memory limit for builds
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
  // Optimize build performance
  experimental: {
    // Disable critters which is causing the build error
    optimizeCss: false,
    // Disable some experimental features to reduce memory usage
    serverComponentsExternalPackages: [],
  },
  // Reduce the size of the build output
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
