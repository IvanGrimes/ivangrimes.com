const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'x-build-id', value: String(process.env.GITHUB_COMMIT_SHA) },
        ],
      },
    ]
  },
}

module.exports = withBundleAnalyzer(nextConfig)
