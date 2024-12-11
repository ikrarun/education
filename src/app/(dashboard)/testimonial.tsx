import { Card } from "@/components/ui/card";
import StarRating from "@/components/ui/starRating";
import React from "react";

export default function Testimonial({
	children,
	author,
	rating,
}: {
	children: React.ReactNode;
	author: string;
	rating: number;
}) {
	return (
		<Card className='p-6 cursor-pointer box size-full hover:shadow-lg bg-gradient-to-br flex flex-col justify-between'>
			<div className='flex flex-col items-start gap-2'>
				<StarRating rating={rating} />
				<p className='text-lg mb-4'>{children}</p>
			</div>
			<p className='font-semibold'>— {author}</p>
		</Card>
	);
}
