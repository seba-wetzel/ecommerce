import React,{useEffect} from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import firebaseConfig from "../../firebase-config";
//Redux
import { useDispatch } from "react-redux";
//Components
import NavBar from "./components/NavBar";
import ProductosContainer from "./containers/ProductosContainer";
import SoloProductoComponent from "./components/SoloProductoComponent";
import Login from "./components/Login";
import Carrito from "./components/Carrito";
import Footer from "./components/Footer";
import AdminPanelContainer from "./containers/AdminPanelContainer";
import NewProduct from "./components/NewProduct";

import withFirebaseAuth from "./firebase/login";
import {setUser} from './redux/actions/user'

//Firebase
import firebase from "firebase/app";
import "firebase/auth";
//import config from '../../firebase-config';

import {
  FirebaseAuthProvider,
  //FirebaseAuthConsumer,
  //IfFirebaseAuthed,
  //IfFirebaseAuthedAnd
} from "@react-firebase/auth";

function App({ user, signOut, signInWithGoogle, signInWithFacebook }) {
  if (user) console.log(user._lat);
  const dispatch = useDispatch()
  useEffect(()=>{
    if (user){ console.log(user._lat)
      fetch("http://localhost:8000/api/users/me", {
  "method": "GET",
  "headers": {
    "authorization": `Bearer ${user._lat}`
  }
})
.then(response => {
  console.log(response)
  dispatch(setUser(user))
})
.catch(err => {
  console.error(err);
});

    } 

  },[user])
  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      
        <BrowserRouter>
          <style>
            {
              "body{background-image: url(https://media.discordapp.net/attachments/771492002147598348/774013141330952272/flowers.jpg?width=860&height=532);background-position: center center;background-repeat: no-repeat;background-attachment: fixed;background-size: cover;height: 100%; }"
            }
          </style>
          <NavBar />
          <Switch>
            <Route path="/shopping" component={Carrito}></Route>
            <Route path="/adminpanel" component={AdminPanelContainer}></Route>
            <Route path="/newproduct" component={NewProduct}></Route>
            <Route
              path="/products/:id"
              component={SoloProductoComponent}
            ></Route>
            <Route path="/" render={() => <ProductosContainer />}></Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      
    </FirebaseAuthProvider>
  );
}

export default withFirebaseAuth(App);
