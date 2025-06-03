import admin from 'firebase-admin';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import fs from 'fs';
import path from 'path';

// Load service account credentials from a path provided in the environment.
// This avoids bundling sensitive files with the repository.
const credentialsPath = process.env.SERVICE_ACCOUNT_KEY_PATH;
let serviceAccount = undefined;
if (credentialsPath) {
  const absolutePath = path.resolve(credentialsPath);
  const data = fs.readFileSync(absolutePath, 'utf8');
  serviceAccount = JSON.parse(data);
}

export const bucketName = "filme-4277e.appspot.com";
export const credentials = serviceAccount;
export const firebaseInstance = admin.initializeApp({
  credential: serviceAccount
    ? admin.credential.cert(serviceAccount)
    : undefined,
  storageBucket: bucketName,
});

export const videoDirectoryPath = 'video'
export const audioDirectoryPath = 'audio'
export const previewImagesDirectoryPath = 'preview'
export const profileImagesDirectoryPath = 'profile images'

var firebaseConfig = {
    apiKey: "AIzaSyAg90KoiFNjyWEq8v3TsS_DtdIXI0yaj1Y",
    authDomain: "filme-4277e.firebaseapp.com",
    projectId: "filme-4277e",
    storageBucket: "filme-4277e.appspot.com",
    messagingSenderId: "89922647715",
    appId: "1:89922647715:web:a9d3c299d65f9bafa8f116",
    measurementId: "G-YG8BEYHXJW"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
