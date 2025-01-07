import type { Metadata } from "next";
import { Raleway as Font } from "next/font/google";
import "@/app/globals.css";
import Nav from "@/components/ui/nav";
import { Toaster } from "sonner";
import Script from "next/script";
import { PaymentProvider } from "@/components/providers/paymentContext";

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
				className='flex flex-col min-h-screen antialiased'
				style={font.style}>
				<Nav />
				<PaymentProvider>{children}</PaymentProvider>
				<Toaster invert richColors expand  position='bottom-left' />
				<Script
					src='https://sdk.cashfree.com/js/v3/cashfree.js'
					strategy='beforeInteractive'
				/>
			</body>
		</html>
	);
}
