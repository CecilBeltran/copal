import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgw89sfJit1NaTIzB_UOsPWcHGLIrU-_A",
  authDomain: "copal-b415d.firebaseapp.com",
  projectId: "copal-b415d",
  storageBucket: "copal-b415d.appspot.com",
  messagingSenderId: "1016797859761",
  appId: "1:1016797859761:web:e63f5101eae178c59d7790"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


