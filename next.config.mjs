/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 needed for GitHub Pages
  images: {
    unoptimized: true,
  },
  basePath: '/Medislot', // 👈 use your repo name here
  assetPrefix: '/Medislot/', // 👈 same here
};

export default nextConfig;



