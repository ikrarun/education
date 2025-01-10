import Image from "next/image";
import wave from "@/images/wave.svg";
export default function Template({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div className='flex h-64 overflow-hidden w-screen justify-center items-center'>
				<Image
					src={wave}
					alt='EduKation'
					className='h-full w-full object-cover object-center'
				/>
			</div>
			{children}
		</>
	);
}
