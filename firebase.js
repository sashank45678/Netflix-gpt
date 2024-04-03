import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCYHIA4udpcEn_s8peQqd6wX6KqR0qLZ7M",
  authDomain: "ngpt-43f57.firebaseapp.com",
  projectId: "ngpt-43f57",
  storageBucket: "ngpt-43f57.appspot.com",
  messagingSenderId: "494797012890",
  appId: "1:494797012890:web:ba6a7af426ffee94e08423",
  measurementId: "G-6QPWYKVDTB"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);