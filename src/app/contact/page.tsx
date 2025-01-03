import Link from "next/link";

const ContactUs = () => {
	return (
		<div className='p-8 max-w-7xl mx-auto rounded-lg '>
			<h1 className='text-4xl font-bold mb-6'>Contact Us</h1>
			<p className='mt-4 mb-6'>
				If you have any questions or need assistance, feel free to reach out to us. 
				You can contact us via email at:
			</p>
			<p className='text-lg font-semibold'>
				<Link
					href='mailto:thewiseconcern@gmail.com'
					className='text-primary hover:underline'>
					thewiseconcern@gmail.com
				</Link>
			</p>
			<p className='mt-4'>
				We look forward to hearing from you!
			</p>
		</div>
	);
};

export default ContactUs;
