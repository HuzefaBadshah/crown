import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCbJcV-ny32V9LFcWYNN71Su-Qac77uTXs",
  authDomain: "crownpractice-db1.firebaseapp.com",
  databaseURL: "https://crownpractice-db1.firebaseio.com",
  projectId: "crownpractice-db1",
  storageBucket: "crownpractice-db1.appspot.com",
  messagingSenderId: "807378726125",
  appId: "1:807378726125:web:7bd2f1068499feac3730e4"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
