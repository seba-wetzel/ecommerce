import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
/* import {Provider} from "react-redux"; */
import NavBar from "./components/NavBar";


function App() {
  return (
    
      <BrowserRouter>

        <Route path="/" component={NavBar} />

      </BrowserRouter>
    
  );
}

export default App;


/* import ProductosContainer from "../containers/ProductosContainer";
import { Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Route path="/" component={ProductosContainer} />
      </BrowserRouter>
    </Provider>
  );
}

export default App; */
