import React from "react";
import { ArrowUpRight, Axis3D } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { buttonVariants } from "../ui/button";
const ThemeToggler = dynamic(() => import("./themeToggler"), { ssr: false });

function Navigationbar() {
	return (
		<div
			tabIndex={-1}
			className='sticky top-0 dark:bg-background bg-primary  w-full z-50 border-b-[0.01em] border-primary/40 navbar'>
			<div className='  max-w-[1200px] mx-auto w-full p-2 inline-flex justify-between items-center'>
				<Link
					className='inline-flex  rounded-lg  px-4 py-2 font-bold gap-2 items-center'
					href='/'>
					<Axis3D className='w-5 h-5' />
					<h1 className='text-xl font-normal'>EduKation</h1>
				</Link>
				<div className='inline-flex font-normal justify-center items-center gap-4'>
					<Link
						className={`${buttonVariants({
							variant: "transparent_outline",
							size: "navbar",
						})} `}
						href='/about'>
						About
						<ArrowUpRight />
					</Link>
					<ThemeToggler />
				</div>
			</div>
		</div>
	);
}

export default Navigationbar;
