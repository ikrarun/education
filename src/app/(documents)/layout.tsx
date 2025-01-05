import type { Metadata } from "next";
import { Raleway as Font } from "next/font/google";
import "@/app/globals.css";
import Image from "next/image";
import wave from "@/app/wave.svg";
import Nav from "@/components/nav";

const font = Font({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "EduKation",
	description: "Pre-Launch EduKation",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${font.className} antialiased`}>
				<Nav />
				<div className='flex h-64 overflow-hidden  bg-black w-screen justify-center items-center'>
					<Image
						src={wave}
						alt='EduKation'
						className='h-full w-full object-cover object-center'
					/>
				</div>
				{children}
			</body>
		</html>
	);
}
