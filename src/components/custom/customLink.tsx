import React from "react";
import Link from "next/link";

interface CustomLinkProps {
	href: string;
	className?: string;
	prefetch?: boolean;
	children: React.ReactNode;
	props?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

const customLink = ({
	href,
	className,
	prefetch = false,
	children,
	props,
}: CustomLinkProps) => {
	return (
		<Link className={className} prefetch={prefetch} href={href} {...props}>
			{children}{" "}
		</Link>
	);
};

customLink.displayName = "Link";
export default customLink;
