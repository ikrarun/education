import Link from "next/link";

const RefundAndReturnPolicy = () => {
	return (
		<div className='p-8 max-w-7xl mx-auto rounded-lg '>
			<h1 className='text-4xl font-bold mb-6'>Refund and Return Policy</h1>
			<p className='text-sm text-gray-500 mb-4'>
				Last updated: January 03, 2025
			</p>
			<p className='mt-4 mb-6'>
				At EduKation, we strive to provide the best tutoring services to our clients. 
				As we offer digital services rather than physical products, our refund and return policy is designed to ensure transparency and fairness.
			</p>

			<h2 className='text-3xl font-semibold mt-8 mb-4'>1. Refund Eligibility</h2>
			<p className='mb-4'>
				Refunds are available for our paid tutoring services under the following conditions:
			</p>
			<ul className='list-disc list-inside mb-6'>
				<li>If you cancel your session at least 24 hours in advance, you are eligible for a full refund.</li>
				<li>If you are not satisfied with your session, please contact us within 48 hours for a review of your case.</li>
			</ul>

			<h2 className='text-3xl font-semibold mt-8 mb-4'>2. Free Tier Services</h2>
			<p className='mb-4'>
				Our free tier services are provided without any guarantee of refunds, as they are offered as a trial to help you assess our tutoring quality. 
				We encourage you to take advantage of these sessions to determine if our services meet your needs.
			</p>

			<h2 className='text-3xl font-semibold mt-8 mb-4'>3. How to Request a Refund</h2>
			<p className='mb-4'>
				To request a refund, please follow these steps:
			</p>
			<ul className='list-disc list-inside mb-6'>
				<li>Contact our support team via email at <Link href='mailto:thewiseconcern@gmail.com' className='text-primary hover:underline'>thewiseconcern@gmail.com</Link>.</li>
				<li>Provide your order details and the reason for the refund request.</li>
				<li>Our team will review your request and respond within 3-5 business days.</li>
			</ul>

			<h2 className='text-3xl font-semibold mt-8 mb-4'>4. Changes to This Policy</h2>
			<p className='mb-4'>
				We may update this Refund and Return Policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically for any updates.
			</p>

			<h2 className='text-3xl font-semibold mt-8 mb-4'>5. Contact Us</h2>
			<p className='mb-4'>
				If you have any questions or concerns about our Refund and Return Policy, please contact us at:
			</p>
			<p>
				<Link href='mailto:thewiseconcern@gmail.com' className='text-primary hover:underline'>thewiseconcern@gmail.com</Link>
			</p>
		</div>
	);
};

export default RefundAndReturnPolicy;
