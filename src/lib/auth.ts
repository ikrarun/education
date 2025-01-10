import { betterAuth } from "better-auth";
import { oneTap } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";

export const auth = betterAuth({
	baseURL: process.env.BETTER_AUTH_URL,
	database: drizzleAdapter(db, {
		provider: "pg", // or "pg" or "mysql"
	}),
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,

			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
	},
	plugins: [oneTap()],
});
