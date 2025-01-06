import { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "sonner";

interface CashfreeInstance {
	checkout: (options: unknown) => void;
}

const useCashfree = () => {
	const [isInitialized, setIsInitialized] = useState(false);
	const CashFree = useRef<CashfreeInstance | null>(null);

	const initializeCashfree = useCallback(() => {
		if (typeof window === "undefined" || !window.Cashfree) {
			console.error("Cashfree library is not available in the window object.");
			return false;
		}

		try {
			CashFree.current = window.Cashfree({
				mode: process.env.NODE_ENV === "development" ? "sandbox" : "production",
			});
			setIsInitialized(true);
			return true;
		} catch (error) {
			console.error("Error during Cashfree initialization:", error);
			return false;
		}
	}, []);

	useEffect(() => {
		if (!isInitialized) {
			const success = initializeCashfree();
			if (!success) {
				toast.error("Failed to initialize Cashfree. Please try again later.");
			}
		}
	}, [isInitialized, initializeCashfree]);

	const checkIsCashfreeInitialized = useCallback(() => {
		if (!isInitialized) {
			toast.error("Cashfree is not initialized.");
			return false;
		}
		return true;
	}, [isInitialized]);

	return { checkIsCashfreeInitialized, CashFree };
};

export default useCashfree;
