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

export const createUserProfileDocument = async (userAuth, additionalDate) => {
    if (!userAuth) return;

    const userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()
    // console.log(snapShot)
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    // console.log(collectionRef)

    // Below codes have three purposes: one is since collection in firebase can only make one set call at a time, so using forEach to loop each collection;
    // second is using batch to submit all sets as one request at a time
    // Third one is using collectionRef.doc() to let firebase create a newDocRef and randomly generate an ID for this object
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        // console.log(newDocRef)

        // below will loop through the array and batch these calls together:
        batch.set(newDocRef, obj)
    });

    return await batch.commit()
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    // console.log(transformedCollection)

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {})
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
