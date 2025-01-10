import { betterAuth } from "better-auth";
import Database from "better-sqlite3";
import { oneTap } from "better-auth/plugins";

export const auth = betterAuth({
	database: new Database("./sqlite.db"),
	baseURL: process.env.BETTER_AUTH_URL as string,
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
	},
	plugins: [oneTap()],
});
