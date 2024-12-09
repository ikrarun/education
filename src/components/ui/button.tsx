'use client'
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, Variants } from "motion/react";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input bg-background hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
				transparent_outline:
					"border dark:border-primary/10 hover:border-primary border-black/40  bg-transparent  hover:bg-secondary/40 hover:text-accent-foreground dark:hover:border-primary",
				special:
					"border dark:border-primary/10 hover:border-black/10 dark:hover:border-primary/40 border-secondary/40  bg-primary dark:bg-primary hover:text-accent-foreground dark:hover:border-primary",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
				navbar: "h-9 px-3 py-2",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

const buttonMotionVariants: Variants = {
	initial: { scale: 1 },
	hover: { scale: 1.05 },
	tap: { scale: 0.95 },
};

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, href, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";

		const MotionComp = motion.create(Comp);

		const buttonContent = (
			<MotionComp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				variants={buttonMotionVariants}
				initial='initial'
				whileHover='hover'
				whileTap='tap'
				{...props}
			/>
		);

		if (href) {
			return (
				<Link href={href} passHref legacyBehavior>
					{buttonContent}
				</Link>
			);
		}

		return buttonContent;
	}
);

Button.displayName = "Button";

export { Button, buttonVariants };
