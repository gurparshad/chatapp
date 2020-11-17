import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQPmRr9goCIgm6FNkWTDcpK5sKbHLRzSA",
    authDomain: "chatapp-f2bfa.firebaseapp.com",
    databaseURL: "https://chatapp-f2bfa.firebaseio.com",
    projectId: "chatapp-f2bfa",
    storageBucket: "chatapp-f2bfa.appspot.com",
    messagingSenderId: "27365136461",
    appId: "1:27365136461:web:d2f98ea04d38d4bbd26404",
    measurementId: "G-D4LDR83H99"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;
