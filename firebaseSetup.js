// FIREBASE APP

import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


// FIRESTORE

import { getFirestore }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// FIREBASE CONFIG

const firebaseConfig = {

  apiKey: "AIzaSyBEMhYhMxC0JFF74xUZMw7dnhW_e4ESvHE",

  authDomain: "kashmiraura-3b921.firebaseapp.com",

  projectId: "kashmiraura-3b921",

  storageBucket: "kashmiraura-3b921.firebasestorage.app",

  messagingSenderId: "347469279692",

  appId: "1:347469279692:web:b1834111fbfdf174d36d69"

};


// INITIALIZE FIREBASE

const app = initializeApp(firebaseConfig);


// FIRESTORE DATABASE

const db = getFirestore(app);


// EXPORT DATABASE

export { db };