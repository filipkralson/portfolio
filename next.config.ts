import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'urbanmaster.cz',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
