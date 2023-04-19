const withExportImages = require("next-export-optimize-images");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer(
  withExportImages({
    experimental: {
      appDir: false,
      scrollRestoration: true,
    },
    images: {
      formats: ["image/avif", "image/webp"],
      deviceSizes: [640, 768, 1024, 1280, 1440, 1980, 2560],
    },
    trailingSlash: true,
  })
);

module.exports = nextConfig;
