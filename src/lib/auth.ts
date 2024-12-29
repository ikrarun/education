import NextAuth, { type DefaultSession } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Twitter from 'next-auth/providers/twitter';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './prisma';

declare module 'next-auth' {
	interface Session {
		user: {
			role: string;
		} & DefaultSession['user'];
	}
}

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(prisma),

	providers: [GitHub, Google, Twitter],

	callbacks: {
		async session({ session, user }) {
			session.user.id = user.id;
			session.user.role = await prisma.user
				.findFirst({
					where: {
						id: user.id,
					},
				})
				.then((user) => user?.role ?? 'STUDENT');
			return session;
		},
	},
	pages: {
		signIn: '/login',
	},
	session: {
		strategy: 'database',
	},
});
