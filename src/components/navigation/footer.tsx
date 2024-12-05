import React from "react";
import { GlobeLock, HeartHandshakeIcon, Mail } from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card";

function footer() {
	return (
		<div className=' w-full bg-amber-500 p-4 h-fit '>
			<Card className='h-fit p-4 items-center bg-black/40 text-white flex flex-col max-w-[900px] mx-auto w-full'>
				<ul className='mb-8 mx-auto gap-4 md:gap-0 justify-between w-full max-w-2xl flex md:flex-row flex-col'>
					<Link
						href={"mailto:iamkrarun@gmail.com"}
						className='flex hover:underline  underline-offset-4 gap-2 w-fit items-center justify-center'>
						<span className='bg-amber-500 p-2 rounded-full'>
							<Mail className='w-6 h-6' />
						</span>
						<h1>iamkrarun@gmail.com</h1>
					</Link>
					<Link
						href={"/privacy-policy"}
						className='flex gap-2  hover:underline underline-offset-4 w-fit items-center justify-center'>
						<span className='bg-amber-500 p-2 rounded-full'>
							<GlobeLock className='w-6 h-6' />
						</span>
						<h1>Privacy Policy</h1>
					</Link>
					<Link
						href={"/privacy-policy"}
						className='flex gap-2  hover:underline underline-offset-4 w-fit items-center justify-center'>
						<span className='bg-amber-500 p-2 rounded-full'>
							<HeartHandshakeIcon className='w-6 h-6' />
						</span>
						<h1>Terms & Conditions</h1>
					</Link>
				</ul>

				<p className='self-start md:self-center text-sm'>
					© 2023 EduKation. All rights reserved.
				</p>
			</Card>
		</div>
	);
}

export default footer;
