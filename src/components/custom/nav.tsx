"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/images/logo.svg";
import Link from "@/components/custom/customLink";
import { User, Wallet } from "lucide-react";
import SearchPanel from "./searchPanel";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { authClient, signInGoogle, signOut } from "@/lib/auth-client";

const Nav = () => {
	const pathName = usePathname();
	const [showDonationButton, setShowDonationButton] = useState(false);
	const {
		data: session,
		isPending, //loading state
	} = authClient.useSession();

	useEffect(() => {
		authClient.oneTap({
			callbackURL: "/about",
		});
	}, []);

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
						{isPending ? (
							<p className='animate-pulse '>Loading</p>
						) : (
							<Button
								size='sm'
								variant={"outline"}
								onClick={() => {
									if (!session?.user) {
										signInGoogle();
									} else {
										signOut();
									}
								}}
								className='text-foreground/80 '
								effect={"ringHover"}>
								<User className='h-5 w-5' />
								{session?.user ? "Sign Out" : "Sign In"}
							</Button>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
