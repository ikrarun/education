// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCP-O24QlrQiz7iIWwtu-RcSzEp65fIYz8",
	authDomain: "kr-firestore-testing.firebaseapp.com",
	projectId: "kr-firestore-testing",
	storageBucket: "kr-firestore-testing.appspot.com",
	messagingSenderId: "631955581160",
	appId: "1:631955581160:web:92fd7875d0635fce1f415d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);
export const generateToken = async () => {
	const token = await getToken(messaging, {
		vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY || "test",
	});
	if (token) {
		console.log("Token: ", token);
	}
	return token;
};
export { app, messaging };
