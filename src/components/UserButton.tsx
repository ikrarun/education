"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/authClient";
import { ChevronDown, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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
				{isPending === null ? (
					<Skeleton className='w-8 h-8 flex bg-black items-center justify-center rounded-full'>
						<User className='w-6 h-6 text-muted-foreground' />
					</Skeleton>
				) : (
					<Avatar>
						<AvatarImage
							src={session?.user.image ?? "https://github.com/shadcn.png"}
						/>
						<AvatarFallback>{session?.user.name.slice(0, 1)}</AvatarFallback>
					</Avatar>
				)}
			</Button>

			{session ? (
				<ChevronDown
					size={18}
					strokeWidth={2}
					className='opacity-60 p-0'
					aria-hidden='true'
				/>
			) : (
				<ChevronDown
					size={18}
					strokeWidth={2}
					className='opacity-10 p-0'
					aria-hidden='true'
				/>
			)}
		</div>
	);
}
