"use client";

import {
	// ArrowUpRight,
	// CircleFadingPlus,
	// FileInput,
	// FolderPlus,
	Search,
} from "lucide-react";
import * as React from "react";
// import { useSearch } from "./fullpageSeachProvider";
// import {
// 	CommandDialog,
// 	CommandEmpty,
// 	CommandGroup,
// 	CommandInput,
// 	CommandItem,
// 	CommandList,
// 	CommandSeparator,
// 	CommandShortcut,
// } from "@/components/ui/command";
// import { DialogTitle } from "@radix-ui/react-dialog";
// import { useRouter } from "next/navigation";
// import Link from "@/components/custom/customLink";
export default function Component() {
	// // const router = useRouter();
	// const [open, setOpen] = React.useState(false);
	// const { searchTerm, setSearchTerm } = useSearch();

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				// setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<>
			<button
				className='inline-flex fixed top-4 z-[51] left-1/2 -translate-x-1/2 mx-auto h-9 w-fit rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20'
				// onClick={() => setOpen(true)}
			>
				<span className='flex grow items-center'>
					<Search
						className='-ms-1 me-3 '
						size={16}
						strokeWidth={2}
						aria-hidden='true'
					/>
					<span className='font-normal '>Not Full Implemented</span>
				</span>
				<kbd className='-me-1 ms-12 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium'>
					⌘K
				</kbd>
			</button>
			{/* <CommandDialog open={open} onOpenChange={setOpen}>
				<DialogTitle className='hidden'>Search</DialogTitle>
				<CommandInput
					placeholder='Type a command or search...'
					value={searchTerm}
					onValueChange={setSearchTerm}
				/>
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading='Quick start'>
						<CommandItem>
							<FolderPlus
								size={16}
								strokeWidth={2}
								className='opacity-60'
								aria-hidden='true'
							/>
							<span>New folder</span>
							<CommandShortcut className='justify-center'>⌘N</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<FileInput
								size={16}
								strokeWidth={2}
								className='opacity-60'
								aria-hidden='true'
							/>
							<span>Import document</span>
							<CommandShortcut className='justify-center'>⌘I</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<CircleFadingPlus
								size={16}
								strokeWidth={2}
								className='opacity-60'
								aria-hidden='true'
							/>
							<span>Add block</span>
							<CommandShortcut className='justify-center'>⌘B</CommandShortcut>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading='Navigation'>
						<CommandItem>
							<Link className='inline-flex w-full' href='/'>
								<ArrowUpRight
									size={16}
									strokeWidth={2}
									className='opacity-60'
									aria-hidden='true'
								/>
								<span>Go to dashboard</span>
							</Link>
						</CommandItem>
						<CommandItem>
							<ArrowUpRight
								size={16}
								strokeWidth={2}
								className='opacity-60'
								aria-hidden='true'
							/>
							<span>Go to apps</span>
						</CommandItem>
						<CommandItem>
							<ArrowUpRight
								size={16}
								strokeWidth={2}
								className='opacity-60'
								aria-hidden='true'
							/>
							<span>Donate </span>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog> */}
		</>
	);
}
