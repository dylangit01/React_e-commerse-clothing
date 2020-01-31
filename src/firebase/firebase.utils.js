import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCkNKsKe426y2EkqWYbayYmp6dEIvmVsqY",
    authDomain: "e-commerce-project-db-33586.firebaseapp.com",
    databaseURL: "https://e-commerce-project-db-33586.firebaseio.com",
    projectId: "e-commerce-project-db-33586",
    storageBucket: "e-commerce-project-db-33586.appspot.com",
    messagingSenderId: "1078297815133",
    appId: "1:1078297815133:web:e658a29bd68bb4993685b4",
    measurementId: "G-5B4TDM68FV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
