import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBzZUNAyAA97f3be5RpKpCStRrZFlYyMjQ",
  authDomain: "aio-clothes-shop.firebaseapp.com",
  projectId: "aio-clothes-shop",
  storageBucket: "aio-clothes-shop.appspot.com",
  messagingSenderId: "274937086542",
  appId: "1:274937086542:web:6e8b56bd4774a9a5e9791f",
  measurementId: "G-B6SDVTN1ZG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (authUser, additionalData) => {
  
  if (!authUser) return;

  const userRef = firestore.doc(`users/${authUser.uid}`);
  const snapShot = await userRef.get(); 

  if (!snapShot.exists) {
    try {
    const { displayName, email } = authUser;
    const createAt = new Date();
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error ', error.message);
    }
  }
  
  return userRef;
};

export default firebase;
