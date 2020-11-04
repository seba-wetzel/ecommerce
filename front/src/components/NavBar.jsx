import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'



const NavBar = () => {
return (
  <div className="App">
    <nav>
      <div className="nav-wrapper #880e4f pink darken-4">
        <a href="#!" className="brand-logo center">Lenceria</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="sass.html"><i className="material-icons">search</i></a></li>
          <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
        </ul>
          <ul className="lefth hide-on-med-and-down">
            <li>
            <Link to="/login"><Login/></Link>
            </li>
            <li><Link to="/">Productos</Link></li>
            <li><a href="collapsible.html"><i className="material-icons">shopping_cart</i></a></li>
          </ul>
      </div>
    </nav>
  </div>
)
}


export default NavBar;