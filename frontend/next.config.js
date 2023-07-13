/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["localhost", "127.0.0.1"],
	},
};

module.exports = {
	nextConfig,
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
};
