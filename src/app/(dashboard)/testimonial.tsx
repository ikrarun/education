import { Card } from "@/components/ui/card";
import StarRating from "@/components/ui/starRating";
import React from "react";

export enum GradientColor {
	red = "from-pink-100 via-red-100 to-yellow-100",
	blue = "from-blue-100 via-indigo-100 to-pink-100",
	green = "from-green-100 via-emerald-100 to-cyan-100",
	purple = "from-purple-100 via-fuchsia-100 to-pink-100",
	orange = "from-orange-100 via-amber-100 to-yellow-100",
	yellow = "from-yellow-100 via-amber-100 to-orange-100",
	indigo = "from-indigo-100 via-blue-100 to-cyan-100",
}
export default function Testimonial({
	children,
	author,
	color = GradientColor.blue, // Default gradient color
	rating,
}: {
	children: React.ReactNode;
	author: string;
	color: GradientColor;
	rating: number;
}) {
	return (
		<Card className={`p-6 size-full bg-gradient-to-br flex flex-col justify-between ${color}`}>
			<div className='flex flex-col items-start gap-2'>
				<StarRating rating={rating} />
			<p className='text-lg mb-4'>{children}</p>
			</div>
			<p className='font-semibold'>— {author}</p>
		</Card>
	);
}
