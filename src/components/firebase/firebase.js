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

  doSignInWithEmailAndPassword = (email, password) => {
    // console.log("hello 1");
    return this.auth.signInWithEmailAndPassword(email, password);
    // console.log("hello 1");
    // this.auth
    //   .setPersistence(this.auth.Auth.Persistence.SESSION)
    //   .then(() => {
    //     console.log("hello 2");
    //     return this.auth.signInWithEmailAndPassword(email, password);
    //   })
    //   .catch((err) => console.warn(`${err.code}: ${err.messsage}`));
  };

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***
  user = (uid) => this.db.ref(`users/${uid}`);

  users = () => this.db.ref("users");

  // getCurrentUser = () => {
  //   return new Promise((resolve, reject) => {
  //     const unsubscribe = this.auth.onAuthStateChanged((userAuth) => {
  //       unsubscribe();
  //       resolve(userAuth);
  //     }, reject);
  //   });
  // };

  // getUserData = async () => {
  //   let uid = await this.getCurrentUser().then(
  //     (userAuth) => !!userAuth && userAuth.uid
  //   );

  //   this.user(uid)
  //     .get()
  //     .then((snapshot) =>
  //       snapshot.exists() ? snapshot.val() : console.log("No data available")
  //     )
  //     .catch((err) => console.warn(err));
  // };

  getUserData = (uid) => {
    return this.user(uid)
      .get()
      .then((snapshot) =>
        snapshot.exists() ? snapshot.val() : console.log("No data available")
      )
      .catch((err) => console.warn(err));
  };
}

export default Firebase;
