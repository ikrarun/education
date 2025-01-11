"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/images/logo.svg";
import Link from "@/components/custom/customLink";
import { Wallet } from "lucide-react";
import SearchPanel from "./searchPanel";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { User } from "lucide-react";
// import { signIn, signOut, useSession } from "next-auth/react";
import { authClient } from "@/lib/authClient"; //import the auth client
import { useRouter } from "next/navigation";

const Nav = () => {
	const router = useRouter();
	const pathName = usePathname();
	const [showDonationButton, setShowDonationButton] = useState(false);
	const { data: session, isPending } = authClient.useSession();
	useEffect(() => {
		toast.success(`Welcome to EduKation ${pathName}`, {
			icon: "🎉",
			duration: 3000,
		});
		if (pathName === "/donate" || pathName === "/success") {
			setShowDonationButton(false);
		} else {
			setShowDonationButton(true);
		}
	}, [pathName]);

	const signIn = async (
		provider:
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
			| "reddit"
	) => {
		await authClient.signIn.social({
			provider: provider,
			callbackURL: "/about", //redirect to dashboard after sign in
		});
	};
	const signOut = async () => {
		await authClient.signOut();
	};

	useEffect(() => {
		const tryOneTap = async () => {
			await authClient.oneTap({
				fetchOptions: {
					onSuccess: () => {
						router.push("/dashboard");
					},
				},
			});
		};

		tryOneTap();
	}, [router]);

	const UserComp = () => {
		if (isPending) return <p>Wait</p>;

		if (session?.user) {
			return (
				<Button
					size='sm'
					variant={"outline"}
					onClick={() => signOut()}
					className='text-foreground/80 '
					effect={"ringHover"}>
					<User className='h-5 w-5' />
					{session?.user.name ?? "User Missing"}
				</Button>
			);
		} else {
			return (
				<Button
					size='sm'
					variant={"outline"}
					onClick={() => signIn("google")}
					className='text-foreground/80 '
					effect={"ringHover"}>
					<User className='h-5 w-5' />
					Sign In With Google
				</Button>
			);
		}
	};

	return (
		<nav className='sticky top-0 left-0 right-0 w-full z-50 bg-background/80 backdrop-blur-3xl border-b'>
			{
				<div className='hidden md:block'>
					<SearchPanel />
				</div>
			}

			<div className='container mx-auto px-6 py-4'>
				<div className='flex items-center justify-between'>
					<Link href='/' className='flex w-full items-center gap-3'>
						<Image
							src={logo}
							alt='logo of edukation brand'
							width={100}
							height={100}
							className='w-10 h-10'
						/>
						<span className='text-xl font-bold bg-clip-text'>EduKation</span>
					</Link>

					<div className='inline-flex items-center justify-center gap-2'>
						<Link
							href='/donate'
							className={showDonationButton ? "block" : "hidden"}>
							<Button
								size='sm'
								variant={"outline"}
								className='text-foreground/80 '
								effect={"ringHover"}>
								<Wallet className='h-5 w-5' />
								Fund the Initiative
							</Button>
						</Link>

						<UserComp />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
