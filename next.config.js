/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_APP_PRIVATE_KEY: process.env.NEXT_APP_PRIVATE_KEY,
    NEXT_APP_CONTRACT_KEY: process.env.NEXT_APP_CONTRACT_KEY
   
    
  },
}

module.exports = nextConfig
