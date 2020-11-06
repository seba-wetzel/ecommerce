
import React from "react";
import { Route,  Switch,BrowserRouter } from 'react-router-dom';


import firebaseConfig from '../../firebase-config';
//Redux
import { Provider } from "react-redux";
import store from './redux/store'
//Components
import NavBar from "./components/NavBar";
import ProductosContainer from "./containers/ProductosContainer"
import Login from './components/Login'
import Carrito from "./components/Carrito";
import Footer from './components/Footer'

import withFirebaseAuth from './firebase/login'

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
  console.log(user)
  return (


    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <Provider store={store}>
        <>
      <style>
      {'body{background-image: url(https://images-ext-1.discordapp.net/external/58sr4TN7ZgZRAC18oVUkoZHZr__30MTeYyxOjlgaDec/https/i.pinimg.com/564x/e4/bf/cb/e4bfcb8597fe3b950571d859c576b564.jpg);background-position: center center;background-repeat: no-repeat;background-attachment: fixed;background-size: cover;height: 100%; }'}
    </style>
        <NavBar />
        <BrowserRouter>
          <div >
            <Switch>
              
              <Route exact path='/shopping' component={Carrito}></Route>
              <Route exact path='/' component={ProductosContainer}></Route>
            </Switch>
          </div>
        </BrowserRouter>
        
       <Footer/> 
        </>
      </Provider>
    </FirebaseAuthProvider>

  );
}

export default withFirebaseAuth(App);
