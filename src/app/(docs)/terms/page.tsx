import Link from "next/link";
import {
	CheckCircle2 as CheckCircle,
	Edit,
	Heart,
	Shield,
	Info,
	TriangleAlert as ExclamationTriangle,
	User,
	FileText,
	Gavel,
} from "lucide-react";

const TermsOfService = () => {
	return (
		<div className='p-8 max-w-7xl mx-auto rounded-lg'>
			<h1 className='text-4xl font-bold mb-6'>Terms of Service</h1>
			<p className='text-sm text-gray-500 mb-4'>
				Last updated: December 31, 2024
			</p>
			<p className='mt-4 mb-6'>
				Welcome to EduKation! By accessing or using our services, you agree to
				be bound by these Terms of Service. Please read them carefully.
			</p>

			{/* Terms Sections */}
			{termsData.map((term, index) => (
				<section className='mb-8' key={index}>
					<h2 className='text-2xl font-semibold mt-6 mb-2 flex items-center'>
						{term.icon} {/* Using the icon from the term data */}
						{`${index + 1}. ${term.title}`}
					</h2>
					<div className='text-muted-foreground pl-10'>{term.content}</div>
				</section>
			))}

			<h2 className='text-2xl font-semibold mt-6 mb-2 flex items-center'>
				<Info className='mr-4 text-primary' /> Contact Us
			</h2>
			<p className='pl-10'>
				If you have any questions or concerns about these Terms of Service,
				please send us an
				<Link
					href='mailto:contact@edukation.in'
					className='text-primary hover:underline'>
					email
				</Link>
			</p>
		</div>
	);
};

// Data for terms sections with icons
const termsData = [
	{
		title: "Acceptance of Terms",
		icon: <CheckCircle className='mr-4 text-primary' />,
		content: (
			<span>
				By using EduKation&apos;s services, you agree to comply with and be
				bound by these Terms of Service, along with our{" "}
				<Link
					className='text-primary underline underline-offset-4'
					href='/privacy'>
					Privacy Policy
				</Link>
				,
			</span>
		),
	},
	{
		title: "Changes to Terms",
		icon: <Edit className='mr-4 text-primary' />,
		content:
			"We reserve the right to modify these terms at any time. We will notify users of significant changes via email or by posting updates on our platform.",
	},
	{
		title: "Donations",
		icon: <Heart className='mr-4 text-primary' />,
		content:
			"All donations made to EduKation are voluntary and non-refundable. Your support helps us develop and deliver our mission to make education accessible to all.",
	},
	{
		title: "User Responsibilities",
		icon: <User className='mr-4 text-primary' />,
		content: (
			<ul className='list-disc pl-6 text-muted-foreground space-y-2'>
				<li>
					Users must provide accurate and truthful information when interacting
					with our platform.
				</li>
				<li>
					Users agree not to misuse our platform, including engaging in unlawful
					activities or violating the rights of others.
				</li>
			</ul>
		),
	},
	{
		title: "Intellectual Property",
		icon: <Shield className='mr-4 text-primary' />,
		content:
			"All content on the EduKation platform, including logos, designs, and resources, is owned by EduKation and protected by intellectual property laws.",
	},
	{
		title: "Limitation of Liability",
		icon: <ExclamationTriangle className='mr-4 text-primary' />,
		content:
			"EduKation is not liable for any damages resulting from the use or inability to use our services. We provide our services 'as is' without warranties of any kind.",
	},
	{
		title: "Termination",
		icon: <Gavel className='mr-4 text-primary' />,
		content:
			"We reserve the right to terminate or suspend access to our services at our sole discretion, without prior notice, if users violate these terms.",
	},
	{
		title: "Governing Law",
		icon: <FileText className='mr-4 text-primary' />,
		content:
			"These terms are governed by the laws of India. Any disputes arising from these terms will be resolved in the courts located in Sultanpur, Uttar Pradesh, India.",
	},
];

export default TermsOfService;
