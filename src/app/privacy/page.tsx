import Link from "next/link";
import { Shield, Lock, Info, User, FileText } from "lucide-react";

const PrivacyPolicy = () => {
	return (
		<div className='p-8 max-w-7xl mx-auto rounded-lg '>
			<h1 className='text-4xl font-bold mb-6'>Privacy Policy</h1>
			<p className='text-sm text-gray-500 mb-4'>
				Last updated: December 31, 2024
			</p>
			<p className='mt-4 mb-6'>
				At EduKation, we are committed to protecting your privacy. This Privacy
				Policy outlines how we collect, use, and safeguard your information when
				you use our website and services. By using our platform, you agree to
				the terms outlined in this policy.
			</p>

			<h2 className='text-3xl font-semibold mt-8 mb-4 flex items-center'>
				<Shield className='mr-3 text-primary' /> 1. Information We Collect
			</h2>
			<p className='mb-4'>
				We collect the following types of information when you use our platform:
			</p>
			<ul className='list-disc list-inside mb-6'>
				<li>
					<strong>Personal Information:</strong> When you sign up or create an
					account, we collect details like your name, email address, and profile
					information.
				</li>
				<li>
					<strong>Usage Data:</strong> We collect data on how you interact with
					our website, including pages visited, time spent, and other usage
					statistics.
				</li>
				<li>
					<strong>Device Information:</strong> Information about the device you
					use to access our services, including IP address, browser type, and
					operating system.
				</li>
			</ul>

			<h2 className='text-2xl font-semibold mt-6 mb-2 flex items-center'>
				<Lock className='mr-2 text-primary' /> 2. How We Use Your Information
			</h2>
			<p>The information we collect is used for the following purposes:</p>
			<ul className='list-disc list-inside'>
				<li>To provide, operate, and maintain our services.</li>
				<li>
					To improve, personalize, and enhance your experience on the platform.
				</li>
				<li>
					To communicate with you, respond to inquiries, and send updates about
					our services.
				</li>
				<li>To analyze and track usage patterns to improve our platform.</li>
				<li>To comply with legal obligations.</li>
			</ul>

			<h2 className='text-2xl font-semibold mt-6 mb-2 flex items-center'>
				<Info className='mr-2 text-primary' /> 3. Data Security
			</h2>
			<p>
				We take the security of your personal information seriously and
				implement a variety of security measures to protect it. However, no
				method of transmission over the Internet or method of electronic storage
				is completely secure, and we cannot guarantee the absolute security of
				your data.
			</p>

			<h2 className='text-2xl font-semibold mt-6 mb-2 flex items-center'>
				<User className='mr-2 text-primary' /> 4. Sharing Your Information
			</h2>
			<p>
				We do not share your personal information with third parties, except as
				necessary to:
			</p>
			<ul className='list-disc list-inside'>
				<li>Provide and improve our services.</li>
				<li>Comply with legal requirements or respond to legal requests.</li>
				<li>
					Enforce our terms of service and protect the rights of users and
					others.
				</li>
			</ul>

			<h2 className='text-2xl font-semibold mt-6 mb-2 flex items-center'>
				<FileText className='mr-2 text-primary' /> 5. Cookies and Tracking
				Technologies
			</h2>
			<p>
				We use cookies and similar tracking technologies to enhance your user
				experience. These technologies help us understand how you use our
				platform, improve our services, and provide you with personalized
				content.
			</p>

			<h2 className='text-2xl font-semibold mt-6 mb-2 flex items-center'>
				<Info className='mr-2 text-primary' /> 6. Your Rights
			</h2>
			<p>
				Depending on your location, you may have the right to access, correct,
				or delete your personal information. If you wish to exercise these
				rights, please contact us using the contact information below.
			</p>

			<h2 className='text-2xl font-semibold mt-6 mb-2 flex items-center'>
				<Info className='mr-2 text-primary' /> 7. Changes to This Privacy Policy
			</h2>
			<p>
				We may update this Privacy Policy from time to time. Any changes will be
				posted on this page, and the date of the most recent update will be
				noted at the top of the page. We encourage you to review this policy
				periodically for any updates.
			</p>

			<h2 className='text-2xl font-semibold mt-6 mb-2 flex items-center'>
				<Info className='mr-2 text-primary' /> 8. Contact Us
			</h2>
			<p>
				If you have any questions or concerns about this Privacy Policy or our
				data practices, please contact us at:
			</p>
			<p>
				If any questions arise, please send us an{" "}
				<Link
					href='mailto:thewiseconcern@gmail.com'
					className='text-primary hover:underline'>
					email
				</Link>
			</p>
		</div>
	);
};

export default PrivacyPolicy;
