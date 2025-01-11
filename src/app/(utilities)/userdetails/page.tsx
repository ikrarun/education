"use client";
import { authClient } from "@/lib/authClient";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const UserDetail = () => {
	const { data: session, isPending } = authClient.useSession();
	const [timeLeft, setTimeLeft] = useState<number>(10);
	const router = useRouter();
	useEffect(() => {
		if (!session && timeLeft > 0) {
			const timerId = setInterval(() => {
				setTimeLeft((prev) => prev - 1);
			}, 1000);

			// Cleanup timer on unmount
			return () => clearInterval(timerId);
		}

		if (timeLeft === 0) {
			router.push("/"); // Redirect to homepage
		}
	}, [session, timeLeft, router]);

	if (isPending) {
		return (
			<div className='flex flex-col items-center justify-center h-full w-full grow'>
				<p className='animate-pulse text-xl'>Loading...</p>;
			</div>
		);
	}
	if (!session) {
		return (
			<div className='flex flex-col items-center justify-center h-full w-full grow'>
				<h1 className='animate-shine duration-700 transition-all text-2xl'>
					No user is Signed In, You will redirected to homepage within{" "}
					{timeLeft} seconds
				</h1>
			</div>
		);
	}

	if (session.user) {
		return (
			<div className='flex flex-col gap-6 items-start justify-center h-full w-fit mx-auto grow'>
				<h1>User Details</h1>
				{session.user.image ? (
					<Image
						unoptimized={true}
						width={125}
						height={125}
						className='rounded-full'
						src={session.user.image}
						alt='User Profile Image'
					/>
				) : (
					<h1>User Image is Not Available</h1>
				)}
				<pre className='font-sans'>{JSON.stringify(session.user, null, 2)}</pre>
			</div>
		);
	}
};

export default UserDetail;
