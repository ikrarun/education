import Script from "next/script";
import React from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			{children}
			<Script
				src='https://sdk.cashfree.com/js/v3/cashfree.js'
				strategy='beforeInteractive'
			/>
		</>
	);
};

export default Template;
