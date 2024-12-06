/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Webpack configuration to suppress warnings
	webpack: (config, { dev, isServer }) => {
		// Suppress Webpack warnings
		config.infrastructureLogging = {
			level: "error", // Only show error-level logs
		};

		// Reduce verbosity of warnings
		config.performance = {
			hints: false, // Disable performance hints
		};

		// Optional: Suppress specific warnings
		config.plugins.push({
			// @ts-expect-error
			apply: (compiler) => {
				// @ts-expect-error
				compiler.hooks.done.tap("suppress-warnings", (stats) => {
					const info = stats.toJson();

					// Filter out specific warning types
					// @ts-expect-error
					const filteredWarnings = info.warnings.filter((warning) => {
						// Add patterns of warnings you want to suppress
						const suppressPatterns = [
							/Critical dependency/,
							/ReflectiveInjectorError/,
							/Using performance hint/,
							/Module not found/,
							// Add any Sentry-specific or project-specific warning patterns
						];

						return !suppressPatterns.some((pattern) => pattern.test(warning));
					});

					// Modify stats to remove filtered warnings
					stats.compilation.warnings = filteredWarnings;
				});
			},
		});

		return config;
	},

	// TypeScript and ESLint warning suppression
	typescript: {
		ignoreBuildErrors: true, // Suppress TypeScript build warnings
	},
	eslint: {
		ignoreDuringBuilds: true, // Suppress ESLint warnings
	},
};

export default withSentryConfig(nextConfig, {
	// Existing Sentry configuration remains the same
	org: "iamkrarun-806fff2e9",
	project: "edukation",

	silent: !process.env.CI,
	widenClientFileUpload: true,
	reactComponentAnnotation: {
		enabled: true,
	},
	tunnelRoute: "/monitoring",
	hideSourceMaps: true,
	disableLogger: true,
	automaticVercelMonitors: true,
});
