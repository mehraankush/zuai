/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(pdf|node)$/, // Add other extensions if necessary
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'static/files/', // Adjust the path as needed
                        publicPath: '/_next/static/files/',
                    },
                },
            ],
        });

        return config;
    },
};


export default nextConfig;
