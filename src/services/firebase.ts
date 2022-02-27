import { initializeApp } from 'firebase/app';

const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} = import.meta.env;


const firebaseConfig = {
  apiKey: FIREBASE_API_KEY as string,
  authDomain: FIREBASE_AUTH_DOMAIN as string,
  projectId: FIREBASE_PROJECT_ID as string,
  storageBucket: FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID as string,
  appId: FIREBASE_APP_ID as string,
};

const firebaseInstance = initializeApp(firebaseConfig);

export default firebaseInstance;
