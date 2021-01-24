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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;