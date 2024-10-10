import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "Inserir aqui",
  authDomain: "Inserir aqui",
  projectId: "Inserir aqui",
  storageBucket: "Inserir aqui",
  messagingSenderId: "Inserir aqui",
  appId: "Inserir aqui",
  measurementId: "Inserir aqui"
};

const vapidKey = "Inserir aqui";

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestFCMToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, { vapidKey });
      return token;
    } else {
      throw new Error("Notification permission not granted");
    }
  } catch (err) {
    if (err.code === 'messaging/token-unsubscribe-failed') {
      console.error("Token unsubscribe failed: ", err);
    } else {
      console.error("Error getting FCM Token: ", err);
    }
    throw err;
  }
};

export const onMessageListener = ()=>{
return new Promise((resolve) => {
  onMessage(messaging, (payload) => {
    resolve(payload)
  })
})
}