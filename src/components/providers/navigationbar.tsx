import React from "react";
import { ArrowUpRight, Axis3D } from "lucide-react";
import { BetterButton } from "../ui/betterbutton";
import ThemeToggler from "./themeToggler";
import Link from "next/link";
function Navigationbar() {
	return (
		<div
			id='navbar'
			tabIndex={-1}
			className='sticky bg-secondary top-0 backdrop-blur-3xl  w-full z-50 border-b-[0.01em] '>
			<div className='  max-w-[1200px] mx-auto w-full p-2 inline-flex justify-between items-center'>
				<Link
					className='inline-flex  text-foreground   rounded-lg  px-4 py-2 font-bold gap-2 items-center'
					href='/'>
					<Axis3D className='w-5 h-5' />
					<h1 className='text-xl font-normal'>EduKation</h1>
				</Link>
				<div className='inline-flex font-normal justify-center items-center gap-4'>
					<BetterButton
						variant={"transparent_outline"}
						href='/about'
						className='text-foreground bg-secondary pl-4 pr-3'>
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
