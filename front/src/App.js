
import React from "react";
import { Route,  Switch } from 'react-router-dom';

//Redux

//Components
import NavBar from "./components/NavBar";
// import Footer from './components/Footer'
import ProductosContainer from "./containers/ProductosContainer"
import Login from './components/Login'

function App() {
  
  return (
    <>
<style>
      {'body{background-image: url(https://images-ext-1.discordapp.net/external/58sr4TN7ZgZRAC18oVUkoZHZr__30MTeYyxOjlgaDec/https/i.pinimg.com/564x/e4/bf/cb/e4bfcb8597fe3b950571d859c576b564.jpg);background-position: center center;background-repeat: no-repeat;background-attachment: fixed;background-size: cover;height: 100%; }'}
    </style>
      <NavBar />
        <div >
             <Switch>
                  <Route path='/' component={ProductosContainer}></Route>
                  <Route exact path='/login' component={Login}></Route>
            </Switch>
        </div>
      {/* <Footer/> */}
    </>  
  );
}

export default App;
