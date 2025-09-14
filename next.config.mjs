/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [/url/] },
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // ✅ Redirect rules
  async redirects() {
    return [
      // Remove trailing slash
      {
        source: "/:path*/",
        destination: "/:path*",
        permanent: true,
      },
      // Force non-www domain
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.webforgeplus.in" }],
        destination: "https://webforgeplus.in/:path*",
        permanent: true,
      },
      // Force HTTPS (if needed, but on Vercel it's default)
      {
        source: "/:path*",
        has: [{ type: "host", value: "webforgeplus.in" }],
        destination: "https://webforgeplus.in/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
