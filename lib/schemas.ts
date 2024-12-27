import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    phone: z.string().min(10, 'Invalid phone number'),
    location: z.string().min(1, 'Location is required'),
    subject: z.array(z.string()).min(1, 'Select at least one subject'),
    date: z.date(),
    mode: z.enum(['online', 'offline', 'hybrid']),
    description: z.string().optional(),
    budget: z.string().optional(),
}); 
