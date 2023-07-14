/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    unoptimized: true,
		domains: [
			"localhost",
			"127.0.0.1",
			"https://fortunate-victory-22b45df4b4.strapiapp.com",
		],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fortunate-victory-22b45df4b4.strapiapp.com/*",
			},
		],
	},
};

module.exports = nextConfig;
