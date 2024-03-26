import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const DATABASE_URL = process.env.REACT_APP_FIREBASE_DATABASE_URL;
const PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const STORAGE_BUCKET = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
const APP_ID = process.env.REACT_APP_FIREBASE_APP_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
