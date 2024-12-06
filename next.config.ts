import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	compress: true,
	i18n: {
		locales: ["en", "in"],
		defaultLocale: "en",
	},
};

export default nextConfig;
