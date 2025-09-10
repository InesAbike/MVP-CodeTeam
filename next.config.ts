import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aromatic-buzzard-872.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
