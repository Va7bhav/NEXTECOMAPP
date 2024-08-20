/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  fs:false,
  path:false,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },
};


export default nextConfig;
