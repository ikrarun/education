"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import NavigationBar from "@/components/navigation/navigationbar";
import Footer from "@/components/navigation/footer";
interface PageTransitionProps {
	children: React.ReactNode;
}
import { Toaster } from "sonner";
import { useEffect } from "react";
import { generateToken, messaging } from "@/lib/firebaseWrapper";
import { onMessage } from "firebase/messaging";

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
	const pathname = usePathname();
	// const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

	// useEffect(() => {
	// 	const handleClick = (e: MouseEvent) => {
	// 		setClickPosition({ x: e.clientX, y: e.clientY });
	// 	};

	// 	window.addEventListener("click", handleClick);

	// 	return () => {
	// 		window.removeEventListener("click", handleClick);
	// 	};
	// }, []);

	useEffect(() => {
		const handleClick = (e: KeyboardEvent) => {
			if (e.key === "Tab") {
				e.preventDefault();
				return;
			}
		};

		window.addEventListener("keydown", handleClick);
		return () => {
			window.removeEventListener("keydown", handleClick);
		};
	}, []);

	useEffect(() => {
		async function requestPermission() {
			try {
				console.log("Requesting notification permission...");
				const permission = await Notification.requestPermission();

				if (permission === "granted") {
					console.log("Notification permission granted.");
					await generateToken(); // Assuming `generateToken` is defined elsewhere.

					onMessage(messaging, (payload) => {
						// console.log("Message received:", payload);
						const notificationTitle =
							payload.notification?.title || "Default Title";
						const notificationOptions = {
							body: payload.notification?.body || "Default body.",
							icon: payload.notification?.icon || "/favicon.ico",
							url: payload.data?.["link"],
						};

						// Display the notification
						const notification = new Notification(
							notificationTitle,
							notificationOptions
						);
						notification.onclick = () => {
							if (notificationOptions.url) {
								const url = notificationOptions.url;
								window.open(url, "_blank");
							}
						};
					});
				} else {
					console.warn("Notification permission denied.");
				}
			} catch (error) {
				console.error("Error requesting notification permission:", error);
			}
		}

		requestPermission();
	}, []);

	return (
		<div
			className='mx-auto min-h-dvh  flex flex-col w-full
							h-full grow'>
			<NavigationBar />
			<Toaster richColors visibleToasts={1} expand />

			{/* <PageTransition> */}
			<div className='min-h-full flex flex-col p-2 max-w-[1200px] mx-auto w-full grow'>
				<motion.div
					key={pathname}
					className='flex flex-col grow h-full items-center justify-center'>
					{children}
				</motion.div>
			</div>
			<Footer />
			{/* </PageTransition> */}
		</div>
	);
};

export default PageTransition;
