import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh4D223K8yDdkaxA_aiAay1z5LPniO_qw",
  authDomain: "cart-14db9.firebaseapp.com",
  projectId: "cart-14db9",
  storageBucket: "cart-14db9.appspot.com",
  messagingSenderId: "876986754664",
  appId: "1:876986754664:web:247a775af462b003627ddd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
