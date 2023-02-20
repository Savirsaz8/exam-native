import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence} from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: "AIzaSyDSjWmt3Ocgx99m4VvOelRlpiycTGnV2is",
  authDomain: "exam-sticky-note.firebaseapp.com",
  projectId: "exam-sticky-note",
  storageBucket: "exam-sticky-note.appspot.com",
  messagingSenderId: "871574434409",
  appId: "1:871574434409:web:70c4806f8d76feed63e8f8",
  measurementId: "G-1GKSNW9NJW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
