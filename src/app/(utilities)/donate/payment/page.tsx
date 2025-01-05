import DonationCard from "./donationcard";

const PaymentPage = () => {
	return (
		<div className='flex h-full w-full grow flex-col items-center justify-center gap-2 pt-12 bg-background p-4'>
			<h1 className='text-2xl font-bold'>Thank you for your support!</h1>
			<p className='text-sm text-muted-foreground'>
				Your donation will help us continue to support our initiative.
			</p>
			<DonationCard />
		</div>
	);
};

export default PaymentPage;
