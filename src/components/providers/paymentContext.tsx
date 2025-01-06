"use client";
import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import { toast } from "sonner";
import useCashfree from "../hook/useCashFree";
import { getPaymentSessionId } from "@/components/providers/paymentBackend";
import { OrderEntity } from "cashfree-pg";
import { isMobile } from "react-device-detect";

type PaymentMethod = "upi" | "debit" | "upiCollect" | "upiIntent" | undefined;

interface PaymentContextType {
	donationAmount: number | undefined;
	setDonationAmount: (amount: number | undefined) => void;
	donationDate: string;
	startSettingUpPayment: () => void;
	setShowPaymentPanel: (show: boolean) => void;
	showPaymentPanel: boolean;
	paymentMethod: PaymentMethod | undefined;
	setPaymentMethod: (method: PaymentMethod) => void;
	getOrderDetails: () => Promise<OrderEntity | undefined>;
	onlyOnMobile: boolean;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	// Referencing the useCashfree hook
	const { checkIsCashfreeInitialized } = useCashfree();

	// Setting up the state for the donation amount
	const [donationAmount, setDonationAmount] = useState<number | undefined>(
		undefined
	);
	// Setting up the state for the payment panel
	const [showPaymentPanel, setShowPaymentPanel] = useState(false);
	// Setting up the state for the payment method
	const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(undefined);
	// Setting up the state for the donation date
	const donationDate = new Date().toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});

	// Toasting the message to select a payment method
	useEffect(() => {
		if (showPaymentPanel) {
			toast.info(
				"Please select a payment method to proceed. You can change the payment method later."
			);
		}
	}, [showPaymentPanel]);
	useEffect(() => {
		toast.success(
			"You have Choosen " + paymentMethod + " as your payment method"
		);
	}, [paymentMethod]);

	// Function to start setting up the payment
	const startSettingUpPayment = () => {
		if (!checkIsCashfreeInitialized()) {
			toast.error("Cashfree was not initialized");
			return;
		}

		if (donationAmount !== undefined) {
			setShowPaymentPanel(true);
			return;
		}
		toast.error("Please select a donation amount to proceed.");
	};

	// Function to start the payment

	const getOrderDetails = async () => {
		try {
			if (donationAmount === undefined) {
				throw new Error("Donation Amount is not selected");
			}
			console.log("Trying to Find Out the Payment ID");

			const Order = await getPaymentSessionId({
				amount: donationAmount,
			});
			if (Order === undefined) {
				throw new Error("Error in getting the payment session id");
			}

			const paymentId = Order?.payment_session_id;

			const orderId = Order?.order_id;
			if (paymentId === undefined) {
				throw new Error("Payment ID is not found");
			}
			if (orderId === undefined) {
				throw new Error("Order ID is not found");
			}
			return Order;
		} catch (error: unknown) {
			const err = error as Error;
			console.warn(err.cause, err.message);
			toast.error("Error in starting the payment because" + err.message);
			return undefined;
		}
	};

	return (
		<PaymentContext.Provider
			value={{
				donationAmount,
				setDonationAmount,
				donationDate,
				startSettingUpPayment,
				setShowPaymentPanel,
				showPaymentPanel,
				setPaymentMethod,
				paymentMethod,
				getOrderDetails,
				onlyOnMobile: isMobile,
			}}>
			{children}
		</PaymentContext.Provider>
	);
};

export const usePaymentContext = () => {
	const context = useContext(PaymentContext);
	if (!context) {
		throw new Error("usePaymentContext must be used within a PaymentProvider");
	}
	return context;
};
