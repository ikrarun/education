"use client";
import { useTheme } from "next-themes";
import { CgMoon, CgSun } from "react-icons/cg";
import { useEffect, useState } from "react";
import { BetterButton } from "../ui/betterbutton";
import { cn } from "@/lib/utils";
const ThemeToggler = ({ className }: { className?: string }) => {
	const { theme, setTheme } = useTheme();

	const [mounted, setMounted] = useState(false);
	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<BetterButton
				variant={"transparent_outline"}
				className='rounded-full'
				size={"icon"}>
				{<CgSun />}
			</BetterButton>
		);
	}
	return (
		<BetterButton
			size={"icon"}
			variant={"transparent_outline"}
			className={cn("rounded-full", className)}
			onClick={() => {
				if (theme == "dark") setTheme("light");
				else setTheme("dark");
			}}>
			{theme == "dark" ? <CgMoon /> : <CgSun />}
		</BetterButton>
	);
};

export default ThemeToggler;
