"use client";

import React from "react";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { Home, InfoIcon, RotateCwIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { useRouter } from "next/navigation";

const Items = ({
	children,
	onclick,
}: {
	children: React.ReactNode;
	onclick?: () => void;
}) => {
	return (
		<ContextMenu.Item
			onClick={() => {
				if (onclick !== undefined) onclick();
			}}
			className='outline-none text-gray-300 hover:text-white pl-2 pr-4 inline-flex items-center cursor-pointer'>
			{children}
		</ContextMenu.Item>
	);
};

const Content = ({ children }: { children: React.ReactNode }) => {
	return (
		<ContextMenu.Content className='z-50 min-w-[200px] w-fit gap-2 flex flex-col shadow-inner bg-black/60 backdrop-blur-md text-gray-200   overflow-hidden rounded-md border p-2 text-popover-foreground'>
			{children}
		</ContextMenu.Content>
	);
};

const ContextMenuProvider = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	return (
		<ContextMenu.Root>
			<ContextMenu.Trigger className='w-full h-full'>
				{children}
			</ContextMenu.Trigger>
			<ContextMenu.Portal>
				<Content>
					<Items onclick={() => router.refresh()}>
						<RotateCwIcon className='w-4 h-4 mr-2' /> Refresh
					</Items>

					<Separator className='w-full bg-gray-400' />
					<Items onclick={() => router.replace("/", { scroll: false })}>
						<Home className='w-4 h-4 mr-2' /> Home
					</Items>
					<Separator className='w-full bg-gray-400' />
					<Items onclick={() => router.replace("/about", { scroll: false })}>
						<InfoIcon className='w-4 h-4 mr-2' /> About
					</Items>
					<Separator className='w-full bg-gray-400' />
					<Items onclick={() => window.location.reload()}>
						<RotateCwIcon className='w-4 h-4 mr-2' /> Force Reload
					</Items>

				</Content>
			</ContextMenu.Portal>
		</ContextMenu.Root>
	);
};

export default ContextMenuProvider;
