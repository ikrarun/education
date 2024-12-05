import type { Metadata, Viewport } from "next";
import "./../assets/globals.css";
import NavigationBar from "@/navigation/navigationbar";
import Footer from "@/navigation/footer";
import "mac-scrollbar/dist/mac-scrollbar.css";
import { Poppins as Font } from "next/font/google";
const font = Font({ subsets: ["latin"], weight: "400" });
import Scrollbar from "@/components/ui/Scrollbar";
import PageTransition from "@/components/animations/pageTransition";
import ContextMenuProvider from "@/components/navigation/contextMenuProvider";

export const metadata: Metadata = {
	title: "EduKation",
	description: "Craft your future with us",
};

export const viewport: Viewport = {
	themeColor: "rgb(30 64 175)",
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				data-mdb-perfect-scrollbar-init
				className={`${font.className} flex-col flex`}>
				<ContextMenuProvider>
					<Scrollbar>
						<div
							className='mx-auto min-h-dvh flex flex-col w-full
							h-full grow'>
							<NavigationBar />
							<PageTransition>
								<div className='min-h-full flex flex-col p-2 max-w-[1200px] mx-auto w-full grow'>
									{children}
								</div>
								<Footer />
							</PageTransition>
						</div>
					</Scrollbar>
				</ContextMenuProvider>
			</body>
		</html>
	);
}
