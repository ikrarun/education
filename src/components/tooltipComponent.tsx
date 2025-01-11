"use client";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

export default function Component({
	children,
	tip,
}: {
	children: ReactNode;
	tip: string;
}) {
	return (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent className='px-2 py-1 m-2 text-xs'>{tip}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
