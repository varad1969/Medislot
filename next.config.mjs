/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  images: {
    unoptimized: true, // disables image optimization (not supported by Pages)
  },
  basePath: '/Medislot', // repo name
  assetPrefix: '/Medislot/', // ensures correct asset loading
};

export default nextConfig;

