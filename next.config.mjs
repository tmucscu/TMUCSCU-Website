/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH, // Sets the base path to `/some-base-path`.
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**",
      port: "",
      pathname: "**",
    },
  ],
};

export default nextConfig;
