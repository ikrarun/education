import * as motion from 'motion/react-client';
import { Children } from 'react';
interface AnimatedContainerProps {
	children: React.ReactNode;
	className?: string;
	startAfter?: number;
	gapInItems?: number;
	onetime: 'yes' | 'no';
}

export default function AnimatedContainer({
	children,
	className,
	gapInItems = 0.1,
	startAfter = 0,
	onetime = 'no',
}: AnimatedContainerProps) {
	return (
		<div className={className}>
			{Children.map(children, (child, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0, repeatCount: Infinity }}
					viewport={{ once: onetime === 'yes' }}
					transition={{
						duration: 0.24,
						ease: 'easeInOut',
						delay: startAfter + gapInItems * index,
					}}
				>
					{child}
				</motion.div>
			))}
		</div>
	);
}
