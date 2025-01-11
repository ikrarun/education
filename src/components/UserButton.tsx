"use client";

/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/authClient";
import { ChevronDown,  RotateCw, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Provider =
	| "github"
	| "apple"
	| "discord"
	| "facebook"
	| "microsoft"
	| "google"
	| "spotify"
	| "twitch"
	| "twitter"
	| "dropbox"
	| "linkedin"
	| "gitlab"
	| "reddit";

export default function UserButton() {
	const { data: session, isPending } = authClient.useSession();
	const router = useRouter();

	const signIn = async (provider: Provider) => {
		await authClient.signIn.social({
			provider,
			callbackURL: "/userdetails", // Redirect after sign-in
		});
	};

	const signOut = async () => {
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					router.push("/");
				},
			},
		});
	};

	return (
		<div className='inline-flex items-center gap-0'>
			<Button
				variant='outline'
				effect={"ringHover"}
				onClick={() => {
					if (session) signOut();
					else signIn("google");
				}}
				className='h-full inline-flex p-1 items-center justify-center w-fit rounded-full'>
				{session === null ? (
					<Skeleton className='w-8 h-8 flex bg-black items-center justify-center rounded-full'>
						<User className='w-6 h-6 text-muted-foreground' />
					</Skeleton>
				) : (
					<img
						className='rounded-full'
						src={session?.user.image ?? ""}
						alt='Profile image'
						width={40}
						height={40}
						aria-hidden='true'
					/>
				)}
			</Button>
			{isPending && (
				<RotateCw
					size={16}
					strokeWidth={2}
					className='opacity-60 ml-1 p-0 animate-rotation'
					aria-hidden='true'
				/>
			)}
			{session && (
				<ChevronDown
					size={18}
					strokeWidth={2}
					className='opacity-60 p-0'
					aria-hidden='true'
				/>
			)}
		</div>
	);
}
