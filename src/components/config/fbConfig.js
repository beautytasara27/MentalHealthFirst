import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";



var firebaseConfig = {
    apiKey: "AIzaSyCfX6o0IL3YwBGukvE_nOhatJspfrMUCBA",
    authDomain: "mentalhealthfirst-255be.firebaseapp.com",
    databaseURL: "https://mentalhealthfirst-255be.firebaseio.com",
    projectId: "mentalhealthfirst-255be",
    storageBucket: "mentalhealthfirst-255be.appspot.com",
    messagingSenderId: "770788469571",
    appId: "1:770788469571:web:07ae238250148e50681df6",
    measurementId: "G-VN6PCZSED3"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const firestore = firebase.firestore();



  export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };

  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

  export default firebase;