"use client";
import { authClient } from "@/lib/authClient";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const OneTapComp = () => {
	const router = useRouter();

	const oneTapRef = useRef(false); // Ensure it starts as `false`
	const { data: session, isPending } = authClient.useSession();

	useEffect(() => {
		const tryOneTap = async () => {
			if (oneTapRef.current) return; // Prevent multiple calls
			oneTapRef.current = true;

			const timeout = (promise: Promise<unknown>, ms: number) => {
				const timeoutPromise = new Promise((_, reject) =>
					setTimeout(() => reject(new Error("One Tap Login Timeout")), ms)
				);
				return Promise.race([promise, timeoutPromise]);
			};

			try {
				if (!isPending && session?.user) return; // Skip if session exists or is pending
				await timeout(
					authClient.oneTap({
						fetchOptions: {
							onSuccess: () => {
								router.push("/userdetails"); // Redirect on success
							},
						},
					}),
					5000 // Timeout duration in milliseconds
				);
			} catch (error) {
				console.error("One Tap Login Error or Timeout:", error);
				oneTapRef.current = false; // Reset the flag on error
			}
		};

		tryOneTap();
	}, [router, session, isPending]);
	return <></>;
};

export default OneTapComp;
