declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		Cashfree: any;
	}
	type CheckoutResult = {
		error?: string;
		redirect?: boolean;
		paymentDetails?: {
			paymentMessage: string;
		};
	};
}

declare module "react-input-number" {
	export default function InputNumber(props: InputNumberProps): React.ReactNode;
}

export {};
