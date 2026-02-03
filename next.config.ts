import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "tolunacorporate.com",
      },
      {
        protocol: "https",
        hostname: "nepa.com",
      },
    ],
  },
};

export default nextConfig;
