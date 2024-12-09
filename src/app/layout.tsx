import type { Metadata, Viewport } from "next";
import "./../assets/globals.css";
import "mac-scrollbar/dist/mac-scrollbar.css";
import { Poppins as Font } from "next/font/google";
const font = Font({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import ContextMenuProvider from "@/components/navigation/contextMenuProvider";
import FirebaseProvider from "@/app/fiebaseProvider";

export const metadata: Metadata = {
	title: "EduKation",
	description: "Craft your future with us",
};

export const viewport: Viewport = {
	minimumScale: 1,
	viewportFit: "cover",
	width: "device-width",
	initialScale: 1,
	themeColor: "#fbbf24",
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
				className={`${font.className} bg select-none flex-col flex`}>
				<ContextMenuProvider>
					<FirebaseProvider>{children}</FirebaseProvider>
				</ContextMenuProvider>
			</body>
		</html>
	);
}
