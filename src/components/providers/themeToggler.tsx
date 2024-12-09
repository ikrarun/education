"use client";
import { useTheme } from "next-themes";
import { CgMoon, CgSun } from "react-icons/cg";
import { buttonVariants } from "../ui/button";

const ThemeToggler = () => {
	const { theme, setTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI

	return (
		<button
			className={`${buttonVariants({
				variant: "transparent_outline",
				size: "icon",
			})}  `}
			onClick={() => {
				if (theme == "dark") setTheme("light");
				else setTheme("dark");
			}}>
			{theme == "dark" ? <CgMoon /> : <CgSun />}
		</button>
	);
};

export default ThemeToggler;
