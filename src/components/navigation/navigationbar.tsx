import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import { SquareLibrary } from "lucide-react";
function navigationbar() {
	return (
		<div className='sticky top-0 backdrop-blur-3xl inline-flex w-full z-50 bg-blue-800  text-white shadow-lg'>
			<div className='  max-w-[1200px] mx-auto shadow-sm w-full p-2 inline-flex justify-between items-center'>
				<Link
					className='inline-flex  hover:bg-white rounded-lg hover:bg-opacity-20 px-4 py-2 font-bold gap-2 items-center'
					href='/'>
					<Image quality={100} src={logo} width={22} height={22} alt='logo' />
					<h1 className='text-xl font-normal'>EduKation</h1>
				</Link>
				<div className='inline-flex font-normal justify-center items-center gap-4'>
					<Link
						className=' inline-flex gap-2 items-center hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg'
						href='/about'>
						<SquareLibrary className='w-5 h-5' />
						About
					</Link>
				</div>
			</div>
		</div>
	);
}

export default navigationbar;
