import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    config.module.rules.push({ test: /\.txt$/, use: 'raw-loader' })

    return config
  },
}

export default nextConfig
