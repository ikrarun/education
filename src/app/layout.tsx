import { Metadata, Viewport } from 'next';
import './../assets/globals.css';
import Font from 'next/font/local';
const localFont = Font({
	src: [
		{
			path: './fonts/SFProDisplay-Ultralight.woff2',
			weight: '100',
			style: 'normal',
		},
		{
			path: './fonts/SFProDisplay-Thin.woff2',
			weight: '200',
			style: 'normal',
		},
		{
			path: './fonts/SFProDisplay-Light.woff2',
			weight: '300',
			style: 'normal',
		},

		{
			path: './fonts/SFProDisplay-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/SFProDisplay-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/SFProDisplay-Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: './fonts/SFProDisplay-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/SFProDisplay-Heavy.woff2',
			weight: '800',
			style: 'normal',
		},
		{
			path: './fonts/SFProDisplay-Black.woff2',
			weight: '900',
			style: 'normal',
		},
	],
});

import { ThemeProvider } from '@/components/providers/themeProviders';
import { SessionProvider } from 'next-auth/react';

const defaultURL =
	process.env.NODE_ENV === 'development'
		? 'https://localhost:3000'
		: 'https://edukation.vercel.app';

export const metadata: Metadata = {
	title: 'EduKation',
	description: 'Craft your future with us',
	metadataBase: new URL(defaultURL),
	applicationName: 'EduKation',
	appleWebApp: {
		capable: true,
		statusBarStyle: 'default',
		title: 'My App',
		startupImage: [
			{
				url: '/icons/apple-splash-2048-2732.jpg',
				media:
					'(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2732-2048.jpg',
				media:
					'(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-1668-2388.jpg',
				media:
					'(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2388-1668.jpg',
				media:
					'(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-1536-2048.jpg',
				media:
					'(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2048-1536.jpg',
				media:
					'(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-1488-2266.jpg',
				media:
					'(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2266-1488.jpg',
				media:
					'(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-1640-2360.jpg',
				media:
					'(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2360-1640.jpg',
				media:
					'(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-1668-2224.jpg',
				media:
					'(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2224-1668.jpg',
				media:
					'(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-1620-2160.jpg',
				media:
					'(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2160-1620.jpg',
				media:
					'(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-1320-2868.jpg',
				media:
					'(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2868-1320.jpg',
				media:
					'(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-1206-2622.jpg',
				media:
					'(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2622-1206.jpg',
				media:
					'(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-1290-2796.jpg',
				media:
					'(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2796-1290.jpg',
				media:
					'(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-1179-2556.jpg',
				media:
					'(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2556-1179.jpg',
				media:
					'(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-1284-2778.jpg',
				media:
					'(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2778-1284.jpg',
				media:
					'(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-1170-2532.jpg',
				media:
					'(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2532-1170.jpg',
				media:
					'(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-1125-2436.jpg',
				media:
					'(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2436-1125.jpg',
				media:
					'(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-1242-2688.jpg',
				media:
					'(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2688-1242.jpg',
				media:
					'(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-828-1792.jpg',
				media:
					'(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-1792-828.jpg',
				media:
					'(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-1242-2208.jpg',
				media:
					'(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-2208-1242.jpg',
				media:
					'(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-750-1334.jpg',
				media:
					'(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-1334-750.jpg',
				media:
					'(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
			},
			{
				url: '/icons/apple-splash-640-1136.jpg',
				media:
					'(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)',
			},
			{
				url: '/icons/apple-splash-1136-640.jpg',
				media:
					'(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)',
			},
		],
	},
	icons: {
		apple: [{ url: '/icons/apple-icon-180.png' }],
	},
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: 'EduKation',
		description: 'Craft your future with us',
		url: defaultURL,
		siteName: 'EduKation',
		images: [
			{
				url: 'https://edukation.vercel.app/logo.png',
				width: 800,
				height: 600,
			},
		],
		determiner: 'auto',
		videos: [
			{
				url: 'https://youtu.be/QDmhz1Wff5o?si=0p2mexshps7DUGvW',
				width: 1280,
				height: 720,
			},
		],
		countryName: 'INDIA',
		locale: 'en-US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'EduKation',
		description: 'Craft your future with us',
		images: [
			{
				url: 'https://edukation.vercel.app/logo.png',
				width: 800,
				height: 600,
			},
		],
	},
	creator: 'Kumar Arun',
};

export const viewport: Viewport = {
	minimumScale: 1,
	viewportFit: 'cover',
	width: 'device-width',
	initialScale: 1,
	themeColor: [
		{
			media: '(prefers-color-scheme: dark)',
			color: '#000',
		},
		{
			media: '(prefers-color-scheme: light)',
			// color: '#0058e6',
			color: '#fff',
		},
	],
	maximumScale: 1,
	userScalable: false,
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${localFont.className} bg flex flex-col`}>
				<SessionProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'
						enableSystem
						disableTransitionOnChange
				>
						{children}
					</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
