import { PaymentProvider } from "@/components/providers/paymentContext";
import DonationPicker from "./component/donationPicker";
import PaymentPanel from "./component/paymentPanel";
import { Inter as Font } from "next/font/google";

const font = Font({
	subsets: ["latin"],
});

const PaymentPage = () => {
	return (
		<div className='flex h-full w-full grow flex-col max-w-[900px] mx-auto gap-2 pt-12 bg-background p-4'>
			<h1 className='text-2xl font-bold'>Thank you for your support!</h1>
			<p className='text-sm text-muted-foreground'>
				Your donation will help us continue to support our initiative.
			</p>
			<div style={font.style}>
				<PaymentProvider>
					<DonationPicker />
					<PaymentPanel />
				</PaymentProvider>
			</div>
		</div>
	);
};

export default PaymentPage;
