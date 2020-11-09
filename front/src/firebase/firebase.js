import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBzk2OZavEhBqRzNDetZrlBrAm5hIjAMTY",
    authDomain: "ecommerce-2020-b068c.firebaseapp.com",
    databaseURL: "https://ecommerce-2020-b068c.firebaseio.com",
    projectId: "ecommerce-2020-b068c",
    storageBucket: "ecommerce-2020-b068c.appspot.com",
    messagingSenderId: "828383040394",
    appId: "1:828383040394:web:1f3f27ef8edc37b6da6e73",
    measurementId: "G-FXWFEH2VDR"
})

export const auth = app.auth()
export default app
