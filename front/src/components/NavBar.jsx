import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'
import Carrito from './Carrito'



const NavBar = () => {
return (
   //NABVAR //
  <div className="App">




    <nav>
      <div className="nav-wrapper #880e4f pink darken-4">
        <a href="#!" className="brand-logo center">Lenceria</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="sass.html"><i className="material-icons">search</i></a></li>
          <li className="input-field">
            
              <input  type="text" id="autocomplete-input" class="autocomplete"/>
              <label className='right hide-on-med-and-down' for="autocomplete-input">Busqueda</label>
            
          </li>
        </ul>
          <ul className="lefth hide-on-med-and-down">
            <li>
            <Link to="/login"><Login/></Link>
            </li>
            <li><Link to="/">Productos</Link></li>
            <li><Link to="/shopping" ><i className="material-icons">shopping_cart</i></Link></li>
          </ul>
      </div>
    </nav>

    



  </div>
)
}


export default NavBar;