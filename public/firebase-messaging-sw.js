// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// Replace 10.13.2 with latest version of the Firebase JS SDK.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyCP-O24QlrQiz7iIWwtu-RcSzEp65fIYz8",
    authDomain: "kr-firestore-testing.firebaseapp.com",
    projectId: "kr-firestore-testing",
    storageBucket: "kr-firestore-testing.appspot.com",
    messagingSenderId: "631955581160",
    appId: "1:631955581160:web:92fd7875d0635fce1f415d",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle =
        payload.notification?.title || "Default Title";
    const notificationOptions = {
        body: payload.notification?.body || "Default body.",
        icon: payload.notification?.icon || "/favicon.ico",
        url: payload.data?.["link"],
    };

    // Display the notification
    const notification = new Notification(
        notificationTitle,
        notificationOptions
    );
    notification.onclick = () => {
        if (notificationOptions.url) {
            const url = notificationOptions.url;
            window.open(url, "_blank");
        }
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
