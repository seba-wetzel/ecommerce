import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
//Redux
import { useDispatch } from "react-redux";
import { setUser, fetchUserDB } from "./redux/actions/user";
//Components
import NavBar from "./components/NavBar";
import ProductosContainer from "./containers/ProductosContainer";
import SoloProductoComponent from "./components/SoloProductoComponent";
import Carrito from "./components/Carrito";
import Footer from "./components/Footer";

// componenetes, usuarios
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/usuarios/Dashboard";
import Login from "./components/usuarios/Login";
import PrivateRoute from "./components/usuarios/PrivateRoute";
import ForgotPassword from "./components/usuarios/ForgotPassword";
import Signup from "./components/usuarios/Signup";
import AdminPanelContainer from "./containers/AdminPanelContainer";
import NewProduct from "./components/NewProduct";

////Firebase
import withFirebaseAuth from "./firebase/login";
import firebaseConfig from "../../firebase-config";
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  //FirebaseAuthConsumer,
  //// IfFirebaseAuthed,
  // IfFirebaseAuthedAnd,
} from "@react-firebase/auth";

function App({ user, signOut, signInWithGoogle, signInWithFacebook }) {
  if (user) console.log(user._lat);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      console.log(user._lat);
      fetch("http://localhost:8000/api/users/me", {
        method: "GET",
        headers: {
          authorization: `Bearer ${user._lat}`,
        },
      })
        .then((response) => {
          console.log(response);
          dispatch(setUser(user));
          dispatch(fetchUserDB());
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user]);

  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <>
        <BrowserRouter>
          <style>
            {
              "body{background-image: url(https://media.discordapp.net/attachments/771492002147598348/774013141330952272/flowers.jpg?width=860&height=532);background-position: center center;background-repeat: no-repeat;background-attachment: fixed;background-size: cover;height: 100%; }"
            }
          </style>
          <NavBar />

          <AuthProvider>
            <div>
              <Switch>
                <Route exact path="/shopping" component={Carrito}></Route>
                <Route
                  exact
                  path="/products/:id"
                  component={SoloProductoComponent}
                ></Route>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <Route
                  exact
                  path="/adminpanel"
                  component={AdminPanelContainer}
                ></Route>
                <Route exact path="/newproduct" component={NewProduct}></Route>
                <Route
                  exact
                  path="/products/:id"
                  component={SoloProductoComponent}
                ></Route>
                <Route
                  exact
                  path="/"
                  render={() => <ProductosContainer />}
                ></Route>
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/login" component={Login} />
                <Route
                  exact
                  path="/forgot-password"
                  component={ForgotPassword}
                />
                <Route
                  exact
                  path="/products"
                  component={ProductosContainer}
                ></Route>
                <Route exact path="/" component={ProductosContainer}></Route>
              </Switch>
            </div>
          </AuthProvider>

          <Footer />
        </BrowserRouter>
      </>
    </FirebaseAuthProvider>
  );
}

export default withFirebaseAuth(App);
