import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
	return (
		<div className='flex flex-col items-center justify-center grow'>
			<div className='flex flex-col gap-1 items-center '>
				<h1 className='my-2'>Connect with the Developer !</h1>
				<div className='flex gap-2 [&>a]:px-4 [&>a]:py-2 w-fit flex-col'>
					<Link
						className='inline-flex rounded-md border-primary/10
                    border hover:border-primary/40 gap-2 items-center justify-center'
						href={"https://x.com/"}>
						<Image
							width={20}
							height={20}
							unoptimized
							src='https://simpleicons.org/icons/x.svg'
							alt=''
						/>
						Twitter
					</Link>
					<Link
						className='inline-flex rounded-md border-primary/10
                    border hover:border-primary/40 gap-2 items-center justify-center'
						href={"https://github.com/"}>
						<Image
							width={20}
							height={20}
							unoptimized
							src='https://simpleicons.org/icons/github.svg'
							alt=''
						/>
						GitHub
					</Link>
					<Link
						className='inline-flex rounded-md border-primary/10
                    border hover:border-primary/40 gap-2 items-center justify-center'
						href={"https://instagram.com/"}>
						<Image
							width={20}
							height={20}
							unoptimized
							src='https://simpleicons.org/icons/instagram.svg'
							alt=''
						/>
						Instagram
					</Link>
				</div>
			</div>
		</div>
	);
}
