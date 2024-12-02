import React from "react";
import { Dela_Gothic_One as Font } from "next/font/google";
import { Separator } from "@/components/ui/separator";
import {  buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const font = Font({ subsets: ["latin"], weight: "400" });

function Home() {
	return (
		<div className='flex flex-col gap-2 grow items-center justify-center h-full w-full'>
			{/* Hero Section Starts Here */}
			<main
				className='flex gap-4 mb-12 justify-center
       flex-col w-full'>
				<h1
					style={font.style}
					className='self-center overflow-visible bg-gradient-to-r  from-pink-500  via-red-500 to-yellow-500 bg-clip-text p-4 text-center text-3xl text-transparent md:text-6xl'>
					Your learning journey starts here
				</h1>
				
					<Link className={`${buttonVariants({ size: "lg" })} w-fit self-center`} href='/about'>Get Started</Link>
			</main>
			{/* Hero Section Ends Here */}

			<div className='flex flex-col w-fit'>
				<h1 className='text-center text-2xl text-gray-600 my-2 font-normal'>
					Being a student is easy. Learning requires actual work.
				</h1>
				<Separator />
				<p className='text-center text-base text-gray-600'>William Crawford</p>
			</div>
		</div>
	);
}

export default Home;
