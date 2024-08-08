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
       source:"/login",
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: "3.110.169.239:3002",
          },
          
          {
            key: 'X-Forwarded-Host',
            value: `3.110.169.239:3002`,
          },
          
        ],
      },
    ]
  },
};

export default nextConfig;
