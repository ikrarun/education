import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/app/logo.svg";
function navigationbar() {
	return (
		<div className='sticky top-0  inline-flex w-full z-50 bg-black text-white shadow-sm'>
			<div className='bg-black text-white max-w-[1200px] mx-auto shadow-sm w-full p-4 inline-flex justify-between items-center'>
				<Link className="inline-flex font-bold gap-2 items-center" href='/'>
					<Image src={logo} width={30} height={30} alt='logo' />
					<h1 className='text-2xl font-normal'>Education</h1>
				</Link>
				<div className='inline-flex justify-center items-center gap-4'>
					<Link href='/about'>
						<p>About</p>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default navigationbar;
