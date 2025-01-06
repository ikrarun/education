"use client";

import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import { toast } from "sonner";
import useCashfree from "@/components/hook/useCashFree";
import { getPaymentSessionId } from "@/components/providers/paymentBackend";
import { OrderEntity } from "cashfree-pg";
import { isMobile } from "react-device-detect";

type PaymentMethod = "upi" | "debit" | "upiCollect" | "upiIntent" | undefined;

interface PaymentContextType {
	donationAmount: number;
	setDonationAmount: (amount: number) => void;
	donationDate: string;
	paymentMethod: PaymentMethod;
	setPaymentMethod: (method: PaymentMethod) => void;
	getOrderDetails: () => Promise<OrderEntity | undefined>;
	onlyOnMobile: boolean;
	proceedToPayment: () => Promise<void>;
	setUserName: (name: string) => void;
	setUserPhone: (phone: string) => void;
	userName: string;
	userPhone: string;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const { checkIsCashfreeInitialized, CashFree } = useCashfree();
	const [userName, setUserName] = useState<string>("");
	const [userPhone, setUserPhone] = useState<string>("");
	const [donationAmount, setDonationAmount] = useState<number>(100);
	const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(undefined);

	const donationDate = new Date().toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});

	useEffect(() => {
		if (paymentMethod) {
			toast.success(`You have chosen ${paymentMethod} as your payment method`);
		}
	}, [paymentMethod]);

	const startSettingUpPayment = () => {
		if (!checkIsCashfreeInitialized()) {
			throw new Error("Cashfree was not initialized");
		}
		if (donationAmount === undefined) {
			throw new Error("Please select a donation amount to proceed.");
		}
	};

	const getOrderDetails = async (): Promise<OrderEntity | undefined> => {
		try {
			if (donationAmount === undefined || donationAmount === 0) {
				throw new Error("Donation Amount is not selected");
			}

			if (!userName) {
				throw new Error("User name is not set");
			}
			if (!userPhone) {
				throw new Error("User phone number is not set");
			}
			const order = await getPaymentSessionId({
				amount: donationAmount,
				name: userName,
				phone: userPhone,
			});
			console.log(order);
			if (!order?.payment_session_id || !order?.order_id) {
				throw new Error("Invalid order details received");
			}
			return order;
		} catch (error) {
			console.warn( error);
			toast.error((error as Error).message);
			return undefined;
		}
	};

	const proceedToPayment = async () => {
		try {
			startSettingUpPayment();
			const orderDetails = await getOrderDetails();
			if (!orderDetails) return;

			toast.success(`Payment Session ID: ${orderDetails.payment_session_id}`);
			toast.success(`Order ID: ${orderDetails.order_id}`);

			if (!CashFree.current) {
				throw new Error("Cashfree was not initialized");
			}

			CashFree.current.checkout({
				paymentSessionId: orderDetails.payment_session_id,
				redirectTarget: "_modal",
			});
		} catch (error) {
			console.error("Error in proceeding to payment:", error);
			toast.error((error as Error).message);
		}
	};

	const contextValue: PaymentContextType = {
		donationAmount,
		setDonationAmount,
		donationDate,

		setPaymentMethod,
		paymentMethod,
		getOrderDetails,
		onlyOnMobile: isMobile,
		proceedToPayment,
		setUserName,
		setUserPhone,
		userName,
		userPhone,
	};

	return (
		<PaymentContext.Provider value={contextValue}>
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
