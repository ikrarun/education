"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/images/logo.svg";
import Link from "@/components/custom/customLink";
import { Gift } from "lucide-react";
// import SearchPanel from "./searchPanel";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import ToolTipComponent from "@/components/tooltipComponent";
import { cn } from "@/lib/utils";

const UserButton = dynamic(() => import("../UserButton"), { ssr: false });

const Nav = () => {
	const pathName = usePathname();
	const router = useRouter();
	const showDonationButton = pathName !== "/donate" && pathName !== "/success";

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

					<div className='inline-flex h-full items-center justify-center gap-2'>
						<ToolTipComponent tip='Your Donations would be helpful'>
							<Button
								size='icon'
								variant={"outline"}
								onClick={() => router.push("/donate")}
								className={cn(
									"text-foreground/70 aspect-square  rounded-full",
									showDonationButton ? "flex" : "hidden"
								)}
								effect={"ringHover"}>
								<Gift className='h-5 w-5' />
							</Button>
						</ToolTipComponent>
						<UserButton />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
