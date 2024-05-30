/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: 'cdn2.thecatapi.com',
        hostname: "pokeapi.deno.dev",
        port: "",
      },
    ],
    domains: ["pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev"],
  },
};

export default nextConfig;
