import { GlobeLock, HeartHandshakeIcon, Mail } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '../ui/separator';

function Footer() {
	const links = [
		{
			href: 'mailto:iamkrarun@gmail.com',
			icon: <Mail className='h-6 w-6' />,
			text: 'iamkrarun@gmail.com',
		},
		{
			href: '/privacy-policy',
			icon: <GlobeLock className='h-6 w-6' />,
			text: 'Privacy Policy',
		},
		{
			href: '/terms-and-conditions',
			icon: <HeartHandshakeIcon className='h-6 w-6' />,
			text: 'Terms & Conditions',
		},
	];

	return (
		<footer className='mt-12 h-fit w-full sm:mt-24'>
			<Separator className='mt-2 w-full bg-secondary-foreground/20' />
			<div className='flex w-full flex-col items-center justify-center bg-background drop-shadow-2xl'>
				<div className='mx-auto flex h-fit w-full max-w-[900px] flex-col items-center overflow-clip rounded-lg p-4 outline-none'>
					<div className='mx-auto flex w-full max-w-2xl flex-col justify-between gap-4 md:flex-row md:gap-0'>
						{links.map((link, index) => (
							<Link
								key={index}
								href={link.href}
								className='flex w-fit items-center justify-center gap-2 rounded-sm pr-2 underline-offset-4 hover:underline'
							>
								<span className='rounded-full p-2'>{link.icon}</span>
								<h1>{link.text}</h1>
							</Link>
						))}
					</div>
				</div>
				<Separator className='w-full bg-secondary-foreground/20' />
				<p className='w-full p-2 text-center text-sm md:text-center'>
					© {new Date().getFullYear()} EduKation. All rights reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
