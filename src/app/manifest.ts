import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "EduKation : Craft your future with us",
		short_name: "EduKation",
		categories: ["education"],
		display_override: ["standalone"],
		orientation: "portrait",
		shortcuts: [
			{
				name: "Home",
				url: "/",
			},
			{
				name: "About",
				url: "/about",
			},
		],
		lang: "en",
		scope: "/",
		launch_handler: {
			client_mode: "auto",
		},
		description: "Where Learning Meets Opportunity, For Free!",
		start_url: "/",
		display: "standalone",
		background_color: "hsl(0 0% 100%)",
		theme_color: "hsl(240 100% 50%)",
		prefer_related_applications: false,
		icons: [
			{
				src: "/logo.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "/logo.png",
				sizes: "192x192",
				type: "image/png",
			},
		],
		screenshots: [
			{
				src: "/logo.png",
				sizes: "512x512",
				type: "image/png",
				form_factor: "wide",
			},
		],
	};
}
