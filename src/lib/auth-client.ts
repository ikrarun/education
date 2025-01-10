import { createAuthClient } from "better-auth/client";
import { passkeyClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
	plugins: [passkeyClient()],
});

export const addPassKey = async () => {
	const data = await authClient.passkey.addPasskey();
	console.log(data);
};

export const signInWithPassKey = async () => {
	const data = await authClient.signIn.passkey();
	console.log(data);
};
