import React from "react";
import { ArrowUpRight } from "lucide-react";
import logo from "./logo.svg";
import { BetterButton } from "../ui/betterbutton";
import ThemeToggler from "./themeToggler";
import Link from "next/link";
import Image from "next/image";
function Navigationbar() {
	return (
		<div
			id='navbar'
			tabIndex={-1}
			className='sticky top-0 backdrop-blur-3xl  w-full z-50 border-b-[0.01em] '>
			<div className='  max-w-[1200px] mx-auto w-full p-2 inline-flex justify-between items-center'>
				<Link
					className='inline-flex  rounded-lg  px-4 py-2 font-bold gap-2 items-center'
					href='/'>
					<Image quality={100} unoptimized className="rounded-full " src={logo} width={30} height={30} alt='logo' />
					<h1 className='text-xl font-normal'>EduKation</h1>
				</Link>
				<div className='inline-flex font-normal justify-center items-center gap-2'>
					<BetterButton
						variant={"transparent_outline"}
						href='/about'
						className='text-foreground rounded-xl pl-3 pr-2'>
						About
						<ArrowUpRight />
					</BetterButton>
					<ThemeToggler />
				</div>
			</div>
		</div>
	);
}

export default Navigationbar;
