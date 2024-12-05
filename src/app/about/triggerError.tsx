"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export default function TriggerError() {
	return (
		<div>
			<Button
				variant={"destructive"}
				onClick={() => {
					throw new Error("This is an error");
				}}>
				Trigger Error
			</Button>
		</div>
	);
}
