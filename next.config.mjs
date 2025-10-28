/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ Important for static export
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next image optimization
  },
  basePath: '/Medislot', // ✅ Required for GitHub Pages
  assetPrefix: '/Medislot/',
  trailingSlash: true,
};

export default nextConfig;


