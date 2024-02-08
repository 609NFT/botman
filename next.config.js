/** @type {import('next').NextConfig} */
const nextConfig = {}

/*module.exports = nextConfig*/

module.exports = {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.mp3$/,
        use: {
          loader: "url-loader",
        },
      });
      return config;
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
