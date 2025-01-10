import { createAuthClient } from "better-auth/react";
import { oneTapClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
	baseURL: process.env.BETTER_AUTH_URL!,
	plugins: [
		oneTapClient({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
			autoSelect: true,
		}),
	],
});

export const { signIn, signUp, useSession } = createAuthClient();
