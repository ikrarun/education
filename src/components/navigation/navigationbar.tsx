import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
function navigationbar() {
	return (
		<div className='sticky top-0 backdrop-blur-md inline-flex w-full z-50 bg-white/40 text-black shadow-md'>
			<div className='  max-w-[1200px] mx-auto shadow-sm w-full p-2 inline-flex justify-between items-center'>
				<Link className='inline-flex font-bold gap-2 items-center' href='/'>
					<Image
						quality={100}
						src={logo}
						width={22}
						height={22}
						alt='logo'
					/>
					<h1 className='text-xl font-normal'>EduKation</h1>
				</Link>
				<div className='inline-flex font-normal justify-center items-center gap-4'>
					<Link href='/about'>
						<p>About</p>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default navigationbar;
