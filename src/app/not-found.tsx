import { buttonVariants } from '@/components/ui/betterbutton';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.svg';
export default function NotFound() {
	return (
		<div className='flex h-full flex-col items-center justify-center'>
			<div className='container px-4 md:px-6'>
				<div className='flex flex-col items-center space-y-8 text-center'>
					<Image
						quality={100}
						priority
						className='animate-float h-32 w-32 md:h-48 md:w-48'
						src={logo}
						width={192}
						height={192}
						alt='404 Logo'
					/>
					<div className='space-y-4'>
						<h1 className='bg-gradient-to-r from-primary to-primary/60 bg-clip-text pb-4 text-5xl font-extrabold tracking-tight text-transparent md:text-6xl'>
							Oops! Page Not Found
						</h1>
						<p className='mx-auto max-w-[600px] text-lg text-muted-foreground md:text-xl'>
							The page you&apos;re looking for seems to have wandered off.
							Let&apos;s get you back on track.
						</p>
					</div>
					<Link
						href='/'
						className={buttonVariants({
							size: 'lg',
							variant: 'default',
							className:
								'group font-semibold transition-all duration-300 hover:scale-105',
						})}
					>
						<span className='inline-block transition-transform group-hover:-translate-x-1'>
							←
						</span>
						<span className='ml-2'>Return Home</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
