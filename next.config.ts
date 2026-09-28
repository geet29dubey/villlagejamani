import type { NextConfig } from "next";

/**
 * Static export keeps the site fully compatible with Cloudflare Pages
 * (no Node runtime required). Images are pre-optimised at build time by
 * `scripts/optimize-images.mjs`, so Next's runtime optimiser is disabled.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
};

export default nextConfig;
