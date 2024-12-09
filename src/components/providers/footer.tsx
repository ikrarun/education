import React from "react";
import { GlobeLock, HeartHandshakeIcon, Mail } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";

function footer() {
	return (
		<div tabIndex={-1} className=' w-full h-fit '>
			<Separator className='w-full my-2' />
			<div className='h-fit outline-none rounded-lg overflow-clip p-4 items-center flex flex-col max-w-[900px] mx-auto w-full'>
				<ul className=' mx-auto gap-4 md:gap-0 justify-between w-full max-w-2xl flex md:flex-row flex-col'>
					<Link
						href={"mailto:iamkrarun@gmail.com"}
						className='flex hover:underline  underline-offset-4 gap-2 w-fit items-center justify-center'>
						<span className=' p-2 rounded-full'>
							<Mail className='w-6 h-6' />
						</span>
						<h1>iamkrarun@gmail.com</h1>
					</Link>
					<Link
						href={"/privacy-policy"}
						className='flex gap-2  hover:underline underline-offset-4 w-fit items-center justify-center'>
						<span className='p-2 rounded-full'>
							<GlobeLock className='w-6 h-6' />
						</span>
						<h1>Privacy Policy</h1>
					</Link>
					<Link
						href={"/privacy-policy"}
						className='flex gap-2  hover:underline underline-offset-4 w-fit items-center justify-center'>
						<span className='p-2 rounded-full'>
							<HeartHandshakeIcon className='w-6 h-6' />
						</span>
						<h1>Terms & Conditions</h1>
					</Link>
				</ul>

			</div>
			<Separator className='w-full' />
				<p className='text-center p-2 md:text-center w-full text-sm'>
					© 2023 EduKation. All rights reserved.
				</p>
		</div>
	);
}

export default footer;
