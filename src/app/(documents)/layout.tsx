import type { Metadata } from "next";
import { Raleway as Font } from "next/font/google";
import "@/app/globals.css";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/components/logo.svg";
import wave from "@/app/wave.svg";

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
				<NavBar />
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

function NavBar() {
	return (
		<nav className='sticky top-0 w-full z-50  bg-background border-b'>
			<div className='container mx-auto px-6 py-4'>
				<div className='flex items-center justify-between'>
					<Link href='/' className='flex items-center gap-3'>
						<Image
							src={logo}
							alt='EduKation'
							width={100}
							height={100}
							className='w-10 h-10'
						/>
						<span className='text-xl font-bold bg-clip-text'>EduKation</span>
					</Link>
					<Link
						className={buttonVariants({ variant: "default" })}
						href='/donate'>
						Fund the Initiative
					</Link>
				</div>
			</div>
		</nav>
	);
}
