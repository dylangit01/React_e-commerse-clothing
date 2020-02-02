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

export const createUserProfileDocument = async (userAuth, additionalDate) => {
    if (!userAuth) return;

    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    console.log(snapShot)
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalDate
            })
        } catch (e) {
            console.log('error creating error', e.message)
        }
    }
    // no matter what, we need to return this userRef, so that in App.js, we can use userRef.onSnapshot to get the data status
    return userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
