/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.freekassa.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
