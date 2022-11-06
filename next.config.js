const withExportImages = require("next-export-optimize-images");
/** @type {import('next').NextConfig} */
const nextConfig = withExportImages({
  experimental: {
    appDir: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1440, 1980, 2560],
  },
});

module.exports = nextConfig;
