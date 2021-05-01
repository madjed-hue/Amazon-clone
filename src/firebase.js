import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAezddr0Ts6W29z6LsgzBCLCmP55uKCHG4",
    authDomain: "clone-7360d.firebaseapp.com",
    projectId: "clone-7360d",
    storageBucket: "clone-7360d.appspot.com",
    messagingSenderId: "1081865123051",
    appId: "1:1081865123051:web:5d164ae4ac55a44b24baae",
    measurementId: "G-MRHCE3GDVW"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth};
export default db;