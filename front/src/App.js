
import React from "react";
import { Route, Redirect, Switch } from 'react-router-dom';

//Redux

//Components
import NavBar from "./components/NavBar";
import ProductosContainer from "./containers/ProductosContainer"
import Login from './components/Login'

function App() {
  
  return (
    <>
      <NavBar />
      
        <div >
             <Switch>
                  <Route exact path='/' component={ProductosContainer}></Route>
                  <Route exact path='/login' component={Login}></Route>
            </Switch>
        </div>
    </>  
  );
}

export default App;
