import type { Metadata } from "next";
import { Raleway as Font } from "next/font/google";
import "@/app/globals.css";
import Nav from "@/components/nav";
import { Toaster } from "sonner";

const font = Font({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "EduKation",
	description: "Pre-Launch EduKation",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${font.className} flex flex-col min-h-screen antialiased`}>
				<Nav />
				{children}
				<Toaster richColors />
			</body>
		</html>
	);
}
