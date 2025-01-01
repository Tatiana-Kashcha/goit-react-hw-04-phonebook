import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA-6-f5jpT-21c-H0VzWH4YQdPBGykpovs',
  authDomain: 'react-crud-test-cd540.firebaseapp.com',
  projectId: 'react-crud-test-cd540',
  storageBucket: 'react-crud-test-cd540.firebasestorage.app',
  messagingSenderId: '789510882984',
  appId: '1:789510882984:web:9dbd3553cc2aab4ac7a49d',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
