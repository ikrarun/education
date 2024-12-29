import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Twitter from 'next-auth/providers/twitter';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from './prisma';

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [GitHub, Google, Twitter],
	callbacks: {
		async session({ session, user }) {
			session.user.id = user.id;
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
