const nextConfig = {
  output: 'export',
  basePath: '/Invento-UI', // repo name
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
