import React from "react";
import { ArrowUpRight } from "lucide-react";
import { BetterButton } from "../ui/betterbutton";
import ThemeToggler from "./themeToggler";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
function Navigationbar() {
	return (
		<div
			id='navbar'
			tabIndex={-1}
			className='sticky top-0 bg-primary text-black backdrop-blur-3xl  w-full z-50 border-b-[0.01em] '>
			<div className='  max-w-[1200px] mx-auto w-full p-2 inline-flex justify-between items-center'>
				<Link
					className='inline-flex  rounded-lg  px-4 py-2 font-bold gap-2 items-center'
					href='/'>
					<Image
						className='rounded-full border-white border p-[0.1px]'
						src={Logo}
						width={30}
						height={30}
						alt='logo'
					/>
					<h1 className='text-xl font-normal'>EduKation</h1>
				</Link>
				<div className='inline-flex font-normal justify-center items-center gap-2'>
					<BetterButton
						variant={"transparent_outline"}
						href='/about'
						className='text-black hover:bg-black/30 hover:text-white border-white/40 rounded-xl pl-3 pr-2'>
						About
						<ArrowUpRight />
					</BetterButton>
					<ThemeToggler className='text-black hover:bg-black/30 border-white/40 hover:text-white' />
				</div>
			</div>
		</div>
	);
}

export default Navigationbar;
