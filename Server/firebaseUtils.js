import fs from 'fs';
import admin from 'firebase-admin';
import { getStorage } from 'firebase/storage';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const bucketName = process.env.FIREBASE_BUCKET_NAME;

let serviceAccount = {};
if (process.env.FIREBASE_SERVICE_ACCOUNT_PATH &&
    fs.existsSync(process.env.FIREBASE_SERVICE_ACCOUNT_PATH)) {
  serviceAccount = JSON.parse(
    fs.readFileSync(process.env.FIREBASE_SERVICE_ACCOUNT_PATH, 'utf8')
  );
}

export const credentials = serviceAccount;
export const firebaseInstance = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: bucketName,
});

export const videoDirectoryPath = 'video';
export const audioDirectoryPath = 'audio';
export const previewImagesDirectoryPath = 'preview';
export const profileImagesDirectoryPath = 'profile images';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
