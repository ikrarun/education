import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { oneTap } from "better-auth/plugins";
import { prisma } from "./db";
import { baseURL } from "./config";
export const auth = betterAuth({
	baseURL: baseURL, // the base url of your auth server
	database: prismaAdapter(prisma, {
		provider: "postgresql", // or "mysql", "postgresql", ...etc
	}),
	socialProviders: {
		google: {
			clientId: process.env.AUTH_GOOGLE_ID!,
			clientSecret: process.env.AUTH_GOOGLE_SECRET!,
		},
	},
	plugins: [oneTap()],
});
