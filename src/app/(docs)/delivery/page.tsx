import React from "react";

const DeliveryPage = () => {
	return (
		<div className='p-8 max-w-7xl mx-auto rounded-lg'>
			<h1 className='text-4xl font-bold mb-6'>Delivery Policy for Digital Goods and Subscriptions</h1>
			<p className='text-sm text-muted-foreground mb-4'>Last updated: January 03, 2025</p>
			<p className='mt-4 mb-6'>
				At EduKation, we provide digital goods and subscription services designed to enhance your learning experience. This Delivery Policy outlines how we deliver our digital products and subscriptions to you.
			</p>
			{policyDetails.map((policy, index) => (
				<div key={index} className='mb-6'>
					<h2 className='text-2xl font-semibold mt-4'>{policy.heading}</h2>
					<p>{policy.content}</p>
				</div>
			))}
		</div>
	);
};

const policyDetails = [
	{
		heading: "1. Delivery Method",
		content: "All digital goods and subscription services are delivered electronically. Upon successful payment, you will receive an email confirmation with instructions on how to access your purchased products or services."
	},
	{
		heading: "2. Accessing Your Purchases",
		content: "You can access your digital goods and subscription services through your account on our website. Simply log in to your account, and navigate to the “My Purchases” section to find your products."
	},
	{
		heading: "3. Subscription Services",
		content: "For subscription services, access will be granted immediately upon payment. Your subscription will automatically renew at the end of each billing cycle unless canceled prior to the renewal date."
	},
	{
		heading: "4. Technical Support",
		content: "If you encounter any issues accessing your digital goods or subscription services, please contact our support team at thewiseconcern@gmail.com. We are here to assist you."
	},
	{
		heading: "5. Changes to This Policy",
		content: "We may update this Delivery Policy from time to time. Any changes will be posted on this page, and we encourage you to review this policy periodically for any updates."
	},
	{
		heading: "6. Contact Us",
		content: "If you have any questions or concerns about our Delivery Policy, please contact us at: thewiseconcern@gmail.com"
	}
];

export default DeliveryPage;
