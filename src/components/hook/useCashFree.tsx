import { useEffect, useRef } from "react";
import { toast } from "sonner";

const useCashfree = () => {
	const CashFree = useRef<unknown>(null);

	// Initialize Cashfree on component mount
	useEffect(() => {
		try {
			if (!window.Cashfree) {
				toast.error("Cashfree library is not available in the window object.");
				return;
			}

			CashFree.current = window.Cashfree({
				mode: process.env.NODE_ENV === "development" ? "sandbox" : "production",
			});

			if (CashFree.current) {
				toast.success("Cashfree successfully initialized.");
			} else {
				toast.error("Cashfree could not be initialized during setup.");
			}
		} catch (error) {
			console.error("Error during Cashfree initialization:", error);
			toast.error("An error occurred while initializing Cashfree.");
		}
	}, []);

	// Function to check if Cashfree is initialized
	const checkIsCashfreeInitialized = () => {
		if (CashFree.current) {
			return true;
		}

		toast.error("Cashfree is not initialized.");
		return false;
	};

	return { checkIsCashfreeInitialized, CashFree };
};

export default useCashfree;
