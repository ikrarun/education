"use client";
import { onMessage } from "firebase/messaging";
import React, { useEffect } from "react";
import { generateToken, messaging } from "@/lib/firebaseWrapper";
import { toast } from "sonner";

export default function FirebaseProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		async function requestPermission() {
			try {
				console.log("Requesting notification permission...");
				const permission = await Notification.requestPermission();

				if (permission === "granted") {
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
				toast.error(`Can't Setup Notification \n ${error}`, { duration: 2000 });
			}
		}

		if (typeof window !== "undefined") {
			requestPermission();
		}
	}, []);
	return children;
}
