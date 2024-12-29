'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import ThemeToggler from '../ui/themeToggler';
import logo from './logo.svg';
import { Untabbable } from 'react-untabbable';
import { Badge } from '../ui/badge';
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
		'inline-flex rounded-lg pl-4 pr-2 py-2 font-bold gap-2 items-center';
	const buttonContainerClasses =
		'inline-flex font-normal justify-center items-center gap-2';

	return (
		<Untabbable>
			<nav id='navbar' className={navbarClasses}>
				<div className={containerClasses}>
					<div className='inline-flex items-center gap-2'>
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
						<Badge variant={'success'} className='text-xs'>
							Beta
						</Badge>
					</div>

					<div className={buttonContainerClasses}>
						<Button
							variant={'outline'}
							onClick={() => {
								router.push('/donate');
							}}
						>
							Support
							<ArrowUpRight />
						</Button>
						<ThemeToggler />
					</div>
				</div>
			</nav>
		</Untabbable>
	);
}

export default Navigationbar;
