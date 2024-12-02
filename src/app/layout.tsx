import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import NavigationBar from "@/navigation/navigationbar";
import Footer from "@/navigation/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Education",
	description: "Craft your future with us",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} flex-col flex min-h-dvh antialiased`}>
				<NavigationBar />
				<div
					className='mx-auto flex flex-col w-full
         h-full grow'>
					<div className='min-h-full flex flex-col p-4 max-w-[1200px] mx-auto w-full grow'>
						{children}
					</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
