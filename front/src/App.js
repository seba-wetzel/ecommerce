
import React from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';



//Redux
import { Provider } from "react-redux";
import store from './redux/store'
//Components
import NavBar from "./components/NavBar";
import ProductosContainer from "./containers/ProductosContainer"
import SoloProductoComponent from './components/SoloProductoComponent'

import Carrito from "./components/Carrito";
import Footer from './components/Footer'
// componenetes, usuarios
import { AuthProvider } from "./contexts/AuthContext"
import Dashboard from "./components/usuarios/Dashboard"
import Login from "./components/usuarios/Login"
import PrivateRoute from "./components/usuarios/PrivateRoute"
import ForgotPassword from "./components/usuarios/ForgotPassword"
import UpdateProfile from "./components/usuarios/UpdateProfile"
import Signup from "./components/usuarios/Signup"



function App() {

  return (
    
      <Provider store={store}>
        <>
         <BrowserRouter>
          <style>
            {'body{background-image: url(https://media.discordapp.net/attachments/771492002147598348/774013141330952272/flowers.jpg?width=860&height=532);background-position: center center;background-repeat: no-repeat;background-attachment: fixed;background-size: cover;height: 100%; }'}
          </style>
          <NavBar />
         
            <AuthProvider>
              <div >
                <Switch>
                  <Route exact path='/shopping' component={Carrito}></Route>
                  <Route path='/products/:id' component={SoloProductoComponent}></Route>
                  <Route exact path='/' component={ProductosContainer}></Route>
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <PrivateRoute path="/update-profile" component={UpdateProfile} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                </Switch>
              </div>
            </AuthProvider>
          
          <Footer />
          </BrowserRouter>
        </>
      </Provider>  


  );
}

export default App;
