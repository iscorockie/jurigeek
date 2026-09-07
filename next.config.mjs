/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow the sandboxed preview proxy origins to load dev-server assets.
  allowedDevOrigins: ["*.e2b.app"],
};

export default nextConfig;
