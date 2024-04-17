/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 's3.ap-south-1.amazonaws.com',
          },
          {
            protocol: 'https',
            hostname: 'skill-india-dev.s3.ap-south-1.amazonaws.com',
          },
          {
            protocol: 'https',
            hostname: 'telcolearning.com/pluginfile.php',
          },
          {
            protocol: 'https',
            hostname: 'telcolearning.com',
          },
          {
            protocol: 'https',
            hostname: 'www.skillindiadigital.gov.in',
          },
        ],}
};

export default nextConfig;
