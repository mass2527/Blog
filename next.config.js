/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: {
      cssProp: true,
    },
  },
  pageExtensions: ["page.tsx"],
};

module.exports = nextConfig;
