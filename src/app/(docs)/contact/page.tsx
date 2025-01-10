import React from "react";

const ContactPage = () => {
	return (
		<div className='p-8 max-w-7xl mx-auto rounded-lg'>
			<h1 className='text-4xl font-bold mb-6'>Contact Us</h1>
			<p className='text-sm text-muted-foreground mb-4'>
				If you have any questions or need assistance, feel free to reach out to us.
			</p>
			<p className='mb-4'>
				Email: <a href='mailto:thewiseconcern@gmail.com' className='text-primary hover:underline'>thewiseconcern@gmail.com</a>
			</p>
			<p className='mt-4'>
				We look forward to hearing from you!
			</p>
		</div>
	);
};

export default ContactPage;
