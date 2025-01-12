import type { NextConfig } from "next";

import BundleAnalyger from "@next/bundle-analyzer";
const nextConfig: NextConfig = {
	/* config options here */
	output: "standalone",
	images: {
		remotePatterns: [
			{
				hostname: "lh3.googleusercontent.com",
			},
		],
	},
};

const withBundleAnalyzer = BundleAnalyger({
	enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
