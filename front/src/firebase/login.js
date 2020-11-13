import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/app";
import "firebase/auth";

//import config from '../../firebase-config';
const firebaseConfig = {
  apiKey: "AIzaSyBzk2OZavEhBqRzNDetZrlBrAm5hIjAMTY",
  authDomain: "ecommerce-2020-b068c.firebaseapp.com",
  databaseURL: "https://ecommerce-2020-b068c.firebaseio.com",
  projectId: "ecommerce-2020-b068c",
  storageBucket: "ecommerce-2020-b068c.appspot.com",
  messagingSenderId: "828383040394",
  appId: "1:828383040394:web:1f3f27ef8edc37b6da6e73",
  measurementId: "G-FXWFEH2VDR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  facebookProvider: new firebase.auth.FacebookAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
});
