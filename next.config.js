/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = nextConfig

// const withCSS = require('@zeit/next-css');
// const compose = require('next-compose');
// cssConfig = {};
// module.exports = compose([
//   [withCSS, cssConfig],
//   {
//     /** @type {import('next').NextConfig} */
//     reactStrictMode: true,
//   swcMinify: true,
//     webpack(config, options) {
//       config.module.rules.push({
//         test: /\.mp3$/,
//         use: {
//           loader: 'file-loader',
//         },
//       });
//       return config;
//     },
//   },
// ]);