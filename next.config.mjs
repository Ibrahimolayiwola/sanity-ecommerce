/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '/images/lj9f3nkn/production/*'
            }
        ]
    }
};

export default nextConfig;
