'use client'
import { GlobalScrollbar } from "mac-scrollbar";
import React from "react";

const Scrollbar = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<GlobalScrollbar />
			{children}
		</>
	);
};

export default Scrollbar;
