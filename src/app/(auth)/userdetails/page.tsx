"use client";
import { authClient } from "@/lib/authClient";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";

const ReactJsonViewer = dynamic(
	() =>
		// @ts-expect-error types not defined
		import("react-json-viewer-cool"),
	{
		ssr: false,
	}
) as React.FC<{
	data: Record<string, unknown>;
	theme?: string;
}>;

const UserDetail = () => {
	const { data: session, isPending } = authClient.useSession();

	const loginNow = async () => {
		await authClient.signIn.social({
			provider: "google",
		});
	};

	if (isPending || session === undefined) {
		return (
			<div className='flex flex-col p-4 items-center justify-center h-full w-full grow'>
				<p className='text-xl'>Loading...</p>
			</div>
		);
	} else if (!session) {
		return (
			<div className='flex shadow-lg border space-y-2 flex-col p-4 items-center justify-center h-full w-full grow'>
				<h1 className='text-2xl text-center'>Want to access this page?</h1>
				<h3>Kindly login before proceeding any further.</h3>
				<Button onClick={loginNow}>Login</Button>
			</div>
		);
	} else if (session.user) {
		return (
			<div className='flex max-w-full flex-col p-4 gap-6 items-start justify-center h-full w-fit mx-auto grow'>
				<h1>User Details</h1>
				{session.user.image ? (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						width={125}
						referrerPolicy='no-referrer'
						height={125}
						className='rounded-full'
						src={session.user.image}
						alt='User Profile Image'
					/>
				) : (
					<h1>User Image is Not Available</h1>
				)}
				<ReactJsonViewer data={session.user} />
			</div>
		);
	}
};

export default UserDetail;
