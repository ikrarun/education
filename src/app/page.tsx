import BenefitsSection from "@/components/landing/benefits-section";
import CallToAction from "@/components/landing/call-to-action";
import DescriptionSection from "@/components/landing/description-section";
import FinalCTA from "@/components/landing/final-cta";
import HeroSection from "@/components/landing/hero-section";
import HowItWorksSection from "@/components/landing/how-it-works-section";
import EarlyAccessSection from "@/components/landing/early-access-section";

export default function Home() {
	return (
		<div className='mx-auto flex min-h-screen w-full max-w-6xl grow flex-col items-center justify-center gap-16 px-4 py-8 md:py-16'>
			<HeroSection />
			<CallToAction />
			<DescriptionSection />
			<BenefitsSection />
			<HowItWorksSection />
			<EarlyAccessSection />
			<FinalCTA />
		</div>
	);
}
