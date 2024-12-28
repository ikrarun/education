'use client';
import { Session } from 'next-auth';
import { toast } from 'sonner';

const tos = ({ session }: { session: Session }) => {
	toast.success('Session', {
		description: session.user?.name,
	});
	return <></>;
};

export default tos;
