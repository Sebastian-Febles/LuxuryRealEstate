import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add the allowedDevOrigins based on the warning from the dev server output.
  // This allows the development server to accept requests from the specified network origin.
  allowedDevOrigins: ['192.168.100.140'],
};

export default nextConfig;
