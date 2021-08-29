import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA-b1CDvQLoS-RX4y5tGL7tLQr_K-gXniI",
    authDomain: "whatsapp-clone-54946.firebaseapp.com",
    projectId: "whatsapp-clone-54946",
    storageBucket: "whatsapp-clone-54946.appspot.com",
    messagingSenderId: "129879407145",
    appId: "1:129879407145:web:25a074d6cd67ad1a4afa38"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };