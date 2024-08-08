/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'react-pdf.org',
            port: '',
          },
        ],
      },
      eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true, // i will change in future (adding valid types)
      },
      typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
     experimental: {
      serverActions: {
        serverActions: { allowedOrigins: ["3.110.169.239:3002",], }

      },
    },
   
  async headers() {
    return [
      {
       source:"/*",
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.NEXT_PUBLIC_APP_URL,
          },
          
          {
            key: 'X-Forwarded-Host',
            value: process.env.NEXT_PUBLIC_APP_URL,
          },
          
        ],
      },
    ]
  },
};

export default nextConfig;
