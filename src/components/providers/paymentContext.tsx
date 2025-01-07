"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";
import useCashfree from "@/hooks/useCashFree";
import {
	getOrderDetailsById,
	getPaymentSessionId,
} from "@/components/providers/paymentBackend";
import { OrderEntity } from "cashfree-pg";
import { isMobile } from "react-device-detect";
import { useRouter } from "next/navigation";

interface PaymentContextType {
	donationDate: string;
	getOrderDetails: () => Promise<OrderEntity | undefined>;
	onlyOnMobile: boolean;
	proceedToPayment: (
		donationAmount: number,
		userName: string,
		userPhone: string
	) => Promise<void>;

	setPaymentID: (paymentID: string) => void;
	paymentID: string;
	retryPayment: (paymentID: string) => Promise<void>;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const router = useRouter();
	const { checkIsCashfreeInitialized, CashFree } = useCashfree();
	const [paymentID, setPaymentID] = useState<string>("");

	const donationDate = new Date().toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});

	const startSettingUpPayment = (donationAmount: number) => {
		if (!checkIsCashfreeInitialized()) {
			throw new Error("Cashfree was not initialized");
		}
		if (donationAmount === undefined) {
			throw new Error("Please select a donation amount to proceed.");
		}
	};

	const getNewOrderDetails = async (
		donationAmount: number,
		userName: string,
		userPhone: string
	): Promise<OrderEntity | undefined> => {
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

			if (!order?.payment_session_id || !order?.order_id) {
				throw new Error("Invalid order details received");
			}
			return order;
		} catch (error) {
			toast.error((error as Error).message);
			return undefined;
		}
	};

	const getOrderDetails = async (): Promise<OrderEntity | undefined> => {
		if (!paymentID) {
			return undefined;
		}
		return await getOrderDetailsById(paymentID);
	};

	const startTransaction = async (orderDetails: OrderEntity) => {
		if (!CashFree.current) {
			throw new Error("Cashfree was not initialized");
		}

		CashFree.current
			.checkout({
				paymentSessionId: orderDetails.payment_session_id,
				redirectTarget: "_blank",
				redirectUrl: "/success?order_id=" + orderDetails.order_id,
			})
			.then((result: CheckoutResult) => {
				if (result.error) {
					router.push("/success?order_id=" + orderDetails.order_id);
				}
				return;
			})
			.catch((err) => {
				toast.error(err.message);
			});
	};

	const proceedToPayment = async (
		donationAmount: number,
		userName: string,
		userPhone: string
	) => {
		try {
			startSettingUpPayment(donationAmount);
			const orderDetails = await getNewOrderDetails(
				donationAmount,
				userName,
				userPhone
			);

			if (!orderDetails || !orderDetails.payment_session_id) return;

			setPaymentID(orderDetails.payment_session_id);
			toast.success(`Payment Session ID: ${orderDetails.payment_session_id}`);
			toast.success(`Order ID: ${orderDetails.order_id}`);

			startTransaction(orderDetails);
		} catch (error) {
			toast.error((error as Error).message);
		}
	};

	const retryPayment = async (orderId: string) => {
		try {
			const orderDetails = await getOrderDetailsById(orderId);
			if (!orderDetails || !orderDetails.payment_session_id) {
				throw new Error("Invalid order details received");
			}
			setPaymentID(orderDetails.payment_session_id);
			toast.success(`Payment Session ID: ${orderDetails.payment_session_id}`);
			toast.success(`Order ID: ${orderDetails.order_id}`);
			startTransaction(orderDetails);
		} catch (error) {
			toast.error((error as Error).message);
		}
	};

	const contextValue: PaymentContextType = {
		donationDate,
		retryPayment,
		getOrderDetails,
		onlyOnMobile: isMobile,
		proceedToPayment,
		setPaymentID,
		paymentID,
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
