import Link from "next/link";
import React from "react";
import { ArrowUpRight, Axis3D } from "lucide-react";
function navigationbar() {
	return (
		<div className='sticky top-0 backdrop-blur-3xl inline-flex w-full z-50 bg-blue-800  text-white shadow-lg'>
			<div className='  max-w-[1200px] mx-auto shadow-sm w-full p-2 inline-flex justify-between items-center'>
				<Link
					className='inline-flex  rounded-lg  px-4 py-2 font-bold gap-2 items-center'
					href='/'>
					<Axis3D className='w-5 h-5' stroke='white' />
					<h1 className='text-xl font-normal'>EduKation</h1>
				</Link>
				<div className='inline-flex font-normal justify-center items-center gap-4'>
					<Link
						className=' inline-flex gap-2 items-center hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-lg'
						href='/about'>
						About
						<ArrowUpRight className='w-5 h-5' />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default navigationbar;
