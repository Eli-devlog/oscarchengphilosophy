import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const RELAXED_CSP = [
  "default-src 'self'",
  "img-src 'self' data: blob: https:",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:",
  "connect-src 'self' https://vitals.vercel-insights.com https://*.vercel-insights.com ws://localhost:* http://localhost:*",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

const STRICT_CSP = [
  "default-src 'self'",
  "img-src 'self' data: https:",
  "style-src 'self' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "script-src 'self'",                 // no 'unsafe-*' in prod
  "connect-src 'self' https://vitals.vercel-insights.com https://*.vercel-insights.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: isProd ? STRICT_CSP : RELAXED_CSP,
          },
          // Security hardening
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
          // Optional moderns (add only if you don't embed cross-origin resources that lack CORP/CORS):
          // { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          // { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
          { key: "Cross-Origin-Resource-Policy", value: "same-site" },
        ],
      },
      // Example: Restrict CORS for API only (see section 2)
      // {
      //   source: "/api/(.*)",
      //   headers: [
      //     { key: "Access-Control-Allow-Origin", value: "https://oscarchengphilosophy.com" },
      //     { key: "Access-Control-Allow-Methods", value: "GET,POST,OPTIONS" },
      //     { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
      //   ],
      // },
    ];
  },
};

export default nextConfig;