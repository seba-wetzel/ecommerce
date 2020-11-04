
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from './components/Login'
//Redux
import { Provider } from "react-redux";
import store from './redux/store'
//Components
import NavBar from "./components/NavBar";
import ProductosContainer from "./containers/ProductosContainer"



function App() {
  
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <div className="App">
            <header className="App-header">
        <Login></Login>
        </header>
          </div>
        <BrowserRouter>
              <Route path="/" component={ProductosContainer} />
        </BrowserRouter>

      </Provider>

</>
    

  );
}

export default App;
