import { toast } from 'sonner';

export type FormAction = () => Promise<void>;
export const notImplemented = () =>
	toast.warning('Functionality Not Implemented');
