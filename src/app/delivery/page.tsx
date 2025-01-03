import Link from "next/link";

const DeliveryPolicy = () => {
	return (
		<div className='p-8 max-w-7xl mx-auto rounded-lg '>
			<h1 className='text-4xl font-bold mb-6'>Delivery Policy for Digital Goods and Subscriptions</h1>
			<p className='text-sm text-gray-500 mb-4'>
				Last updated: January 03, 2025
			</p>
			<p className='mt-4 mb-6'>
				At EduKation, we provide digital goods and subscription services designed to enhance your learning experience. This Delivery Policy outlines how we deliver our digital products and subscriptions to you.
			</p>

			<h2 className='text-3xl font-semibold mt-8 mb-4'>1. Delivery Method</h2>
			<p className='mb-4'>
				All digital goods and subscription services are delivered electronically. Upon successful payment, you will receive an email confirmation with instructions on how to access your purchased products or services.
			</p>

			<h2 className='text-3xl font-semibold mt-8 mb-4'>2. Accessing Your Purchases</h2>
			<p className='mb-4'>
				You can access your digital goods and subscription services through your account on our website. Simply log in to your account, and navigate to the &ldquo;My Purchases&rdquo; section to find your products.
			</p>

			<h2 className='text-3xl font-semibold mt-8 mb-4'>3. Subscription Services</h2>
			<p className='mb-4'>
				For subscription services, access will be granted immediately upon payment. Your subscription will automatically renew at the end of each billing cycle unless canceled prior to the renewal date.
			</p>

			<h2 className='text-3xl font-semibold mt-8 mb-4'>4. Technical Support</h2>
			<p className='mb-4'>
				If you encounter any issues accessing your digital goods or subscription services, please contact our support team at <Link href='mailto:thewiseconcern@gmail.com' className='text-primary hover:underline'>thewiseconcern@gmail.com</Link>. We are here to assist you.
			</p>

			<h2 className='text-3xl font-semibold mt-8 mb-4'>5. Changes to This Policy</h2>
			<p className='mb-4'>
				We may update this Delivery Policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically for any updates.
			</p>

			<h2 className='text-3xl font-semibold mt-8 mb-4'>6. Contact Us</h2>
			<p className='mb-4'>
				If you have any questions or concerns about our Delivery Policy, please contact us at:
			</p>
			<p>
				<Link href='mailto:thewiseconcern@gmail.com' className='text-primary hover:underline'>thewiseconcern@gmail.com</Link>
			</p>
		</div>
	);
};

export default DeliveryPolicy;
