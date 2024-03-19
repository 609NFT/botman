/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Replace 'fs' module with a mock on the client side
      config.resolve.fallback = { fs: false };
    }
    return config;
  
  /*webpack(config, options) {
      config.module.rules.push({
        test: /\.mp3$/,
        use: {
          loader: "url-loader",
        },
      });
      return config;*/
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'postimg.cc',
          port: '',
          pathname: '/gLbWW6q3/f9a3f64a',
        },
      ],
    },
  };
