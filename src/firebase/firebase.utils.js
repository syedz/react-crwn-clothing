import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApcxUPn6vImbrEUJa3sHCwAMUNWZP6hVI",
    authDomain: "crwn-db-98777.firebaseapp.com",
    databaseURL: "https://crwn-db-98777.firebaseio.com",
    projectId: "crwn-db-98777",
    storageBucket: "crwn-db-98777.appspot.com",
    messagingSenderId: "445289958016",
    appId: "1:445289958016:web:3ff30cf60b12d3d56e7465"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get(); 

    console.log(snapShot);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email, 
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;