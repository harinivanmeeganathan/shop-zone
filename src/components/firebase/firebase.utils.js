import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  
apiKey: "AIzaSyCyNMCSyqpAV_ic5x0apSH9jUBsDfHEJQs",
authDomain: "shop-zone-58ecf.firebaseapp.com",
projectId: "shop-zone-58ecf",
storageBucket: "shop-zone-58ecf.appspot.com",
messagingSenderId: "1004142887455",
appId: "1:1004142887455:web:db52695544c0c900d34b2a",
measurementId: "G-SYLV9H5EL3"
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