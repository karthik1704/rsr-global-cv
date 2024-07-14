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
};

export default nextConfig;
