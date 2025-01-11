import type { Metadata } from "next";
import { Poppins as Font } from "next/font/google";
import "@/app/globals.css";
import { Toaster } from "sonner";
import Script from "next/script";
import { PaymentProvider } from "@/components/providers/paymentContext";
import { SearchProvider } from "@/components/custom/fullpageSeachProvider";
// import { SessionProvider } from "next-auth/react";
const font = Font({
	subsets: ["latin"],
	weight: ["300"],
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
				{/* <SessionProvider> */}
				<SearchProvider>
					<PaymentProvider>{children}</PaymentProvider>
					<Toaster invert richColors expand position='bottom-left' />
					<Script
						src='https://sdk.cashfree.com/js/v3/cashfree.js'
						strategy='beforeInteractive'
					/>
					{/* <OneTapComp /> */}
				</SearchProvider>
				{/* </SessionProvider> */}
			</body>
		</html>
	);
}
