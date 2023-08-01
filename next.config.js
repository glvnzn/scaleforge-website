/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    urlImports: ["https://assets.tina.io"],
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};

module.exports = nextConfig;
