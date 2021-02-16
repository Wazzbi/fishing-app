import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

// TODO fixnout
//.env soubor nepředávat data a tak jsou tu přepsané
const config = {
  apiKey: "AIzaSyDCd8Esui47ZZo3xXVTGL27-dVU6M_USmc",
  authDomain: "fishing-app-45df4.firebaseapp.com",
  databaseURL:
    "https://fishing-app-45df4-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "fishing-app-45df4",
  storageBucket: "fishing-app-45df4.appspot.com",
  messagingSenderId: "807080514388",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***
  user = (uid) => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");
}

export default Firebase;
