declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		Cashfree: any;
	}
}

declare module "react-input-number" {
	export default function InputNumber(props: InputNumberProps): React.ReactNode;
}
export {};
