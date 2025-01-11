import { oneTapClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import { baseURL } from "./config";

export const authClient = createAuthClient({
	baseURL: baseURL,
	plugins: [
		oneTapClient({
			clientId: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID!,
		}),
	],
});
