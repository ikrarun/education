import { createAuthClient } from "better-auth/react";
import { oneTapClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
	baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL as string,
	plugins: [
		oneTapClient({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
			autoSelect: true,
			cancelOnTapOutside: true,
		}),
	],
});

export const signInGoogle = async () => {
	const data = await authClient.signIn.social({
		provider: "google",
	});
	console.log(data);
};
export const signOut = async () => {
	await authClient.signOut();
};
