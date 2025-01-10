import Nav from "@/components/custom/nav";
import { ReactNode } from "react";
const Template = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Nav />
			{children}
		</>
	);
};

export default Template;
