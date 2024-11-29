/** @type {import('next').NextConfig} */

const path = require('path')

const withPWA = require('next-pwa')({
  dest: "public",
  
  //register: true,
  //skipWaiting: true,
})

const nextConfig = withPWA({
  reactStrictMode: false,
  env: {
    ServerId: process.env.ServerId,
    ServerUrl: process.env.ServerUrl || 'http://localhost',  // Ensure ServerUrl is defined
},
})

module.exports = nextConfig













// /** @type {import('next').NextConfig} */

// const path = require('path');
// const withPWA = require('next-pwa');

// const nextConfig = withPWA({
//   dest: "public",
//   disable: process.env.NODE_ENV === 'development',  // Disable during development
//   reactStrictMode: true,
//   env: {
//     ServerId: process.env.ServerId,
//     ServerUrl: process.env.ServerUrl || 'http://localhost',  // Ensure ServerUrl is defined
//   },
// });


// module.exports = nextConfig;
