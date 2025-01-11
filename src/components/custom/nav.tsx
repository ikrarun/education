"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/images/logo.svg";
import Link from "@/components/custom/customLink";
import { LogOut, LogIn, ReceiptIndianRupee } from "lucide-react";
// import SearchPanel from "./searchPanel";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/authClient";

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

		setShowDonationButton(pathName !== "/donate" && pathName !== "/success");
	}, [pathName]);

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
					<LogOut className='h-5 w-5' />
					{session?.user.name.split(" ")[0] ?? "User Missing"}
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
					<LogIn className='h-5 w-5' />
				</Button>
			);
		}
	};

	return (
		<nav className='sticky top-0 left-0 right-0 w-full z-50 bg-background/80 backdrop-blur-3xl border-b'>
			{/* <div className='hidden md:block'>
				<SearchPanel />
			</div> */}

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
						<UserComp />
						<Link
							href='/donate'
							className={showDonationButton ? "block" : "hidden"}>
							<Button
								size='sm'
								variant={"outline"}
								className='text-foreground/80 '
								effect={"ringHover"}>
								<ReceiptIndianRupee className='h-5 w-5' />
								Donate
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
