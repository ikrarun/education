import { buttonVariants } from "@/components/ui/betterbutton";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
export default function NotFound() {
	return (
		<div
			className='flex flex-col
		items-center justify-center w-full h-fit gap-4 my-auto grow self-center'>
			<Image quality={100} unoptimized src={logo} width={120} height={120} alt='404' />
			<h2 className='text-3xl font-semibold'>404</h2>
			<p>Could not find requested resource</p>
			<Link className={buttonVariants({ size: "lg" })} href='/'>
				Return Home
			</Link>
		</div>
	);
}
