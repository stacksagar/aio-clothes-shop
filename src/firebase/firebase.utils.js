import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDIchxSSwCvxlKLVZOkVCaZwh3Tv5fgOxY',
  authDomain: 'crawn-db-e018b.firebaseapp.com',
  projectId: 'crawn-db-e018b',
  storageBucket: 'crawn-db-e018b.appspot.com',
  messagingSenderId: '47021098478',
  appId: '1:47021098478:web:81a9cb14267d476ec93aff',
  measurementId: 'G-WDF7ZFC4H3',
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
