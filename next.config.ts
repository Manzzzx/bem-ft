import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: [
      "picsum.photos",
    ]
  }
};

export default nextConfig;
