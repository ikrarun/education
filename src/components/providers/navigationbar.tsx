'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from './logo.svg';
import ThemeToggler from '../ui/themeToggler';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
interface NavbarProps {
	className?: string;
}

function Navigationbar({ className }: NavbarProps) {
	const router = useRouter();
	const navbarClasses = `sticky top-0  backdrop-blur-3xl w-full z-50 border-b-[0.01em] ${
		className || ''
	}`;
	const containerClasses =
		'max-w-[1200px] mx-auto w-full p-2 inline-flex justify-between items-center';
	const logoClasses =
		'inline-flex rounded-lg px-4 py-2 font-bold gap-2 items-center';
	const buttonContainerClasses =
		'inline-flex font-normal justify-center items-center gap-2';
	
	return (
		<nav id='navbar' tabIndex={-1} className={navbarClasses}>
			<div className={containerClasses}>
				<Link className={logoClasses} href='/'>
					<Image
						src={logo}
						alt='EduKation Logo'
						width={192}
						height={192}
						className='h-8 w-8'
					/>
					<h1 className='text-xl font-normal'>EduKation</h1>
				</Link>
				<div className={buttonContainerClasses}>
					<Button
						variant={'outline'}
						onClick={() => {
							router.push('/about');
						}}
					>
						About
						<ArrowUpRight />
					</Button>
					<ThemeToggler  />
				</div>
			</div>
		</nav>
	);
}

export default Navigationbar;
