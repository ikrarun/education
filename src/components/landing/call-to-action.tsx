import { Check } from "lucide-react";

const ListItem = ({ text }: { text: string }) => (
	<li className='flex cursor-pointer items-center gap-3 rounded-md p-3 transition-colors '>
		<span className='flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm'>
			<Check className='h-3.5 w-3.5' strokeWidth={3} />
		</span>
		<span className='text-sm font-medium '>{text}</span>
	</li>
);

export default function CallToAction() {
	return (
		<div className='mx-auto w-full max-w-3xl px-4'>
			<div className='flex flex-col items-center space-y-8'>
				{/* Quick Benefits */}
				<div className='flex w-full flex-col gap-4 '>
					<ul className='grid gap-4 md:grid-cols-3'>
						<ListItem text='No Platform Fees' />
						<ListItem text='Pay for Lessons Only' />
						<ListItem text='Zero Commission' />
					</ul>
				</div>
			</div>
		</div>
	);
}
