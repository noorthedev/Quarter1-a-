// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,  // Optional, enable React Strict Mode
    webpack(config) {
      // If you want to allow `.mjs` files, add the `.mjs` extension to `resolve.extensions`
      config.resolve.extensions.push('.mjs');
      
      return config;
    },
    typescript: {
      ignoreBuildErrors: true,  // Optional, ignore TypeScript errors during build (use with caution)
    },
  };
  
  export default nextConfig;
  