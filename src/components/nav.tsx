"use client";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import logo from "@/components/logo.svg";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Nav = () => {
	const pathname = usePathname();

	return (
		<nav className='sticky top-0 left-0 right-0 w-full z-50 bg-background border-b'>
			<div className='container mx-auto px-6 py-4'>
				<div className='flex items-center justify-between'>
					<Link href='/' className='flex items-center gap-3'>
						<Image
							src={logo}
							alt='EduKation'
							width={100}
							height={100}
							className='w-10 h-10'
						/>
						<span className='text-xl font-bold bg-clip-text'>EduKation</span>
					</Link>
					<Link
						prefetch={false}
						className={cn(
							buttonVariants({ variant: "default" }),
							pathname == "/donate" ? "hidden" : ""
						)}
						href='/donate'>
						Fund the Initiative
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
