/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ae01.alicdn.com",
        port: "",
        pathname: "/kf/**",
      },
    ],
  },
};

export default nextConfig;
