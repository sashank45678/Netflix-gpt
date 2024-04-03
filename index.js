import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCYHIA4udpcEn_s8peQqd6wX6KqR0qLZ7M",
  authDomain: "ngpt-43f57.firebaseapp.com",
  projectId: "ngpt-43f57",
  storageBucket: "ngpt-43f57.appspot.com",
  messagingSenderId: "494797012890",
  appId: "1:494797012890:web:ba6a7af426ffee94e08423",
  measurementId: "G-6QPWYKVDTB"
};
firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
