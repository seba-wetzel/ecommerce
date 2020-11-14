import React from "react";
const Footer = () => {
  return (
    <footer className="#880e4f pink darken-4">
      <div className="container">
        <div class="footer contenedor">
          <h5 className="white-text">E-commerce-2020</h5>
          <div class="iconos">
            <i class="fab fa-youtube"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-github"></i>
          </div>
          <p>La pasión e innovación es lo que nos distingue del resto</p>
        </div>
        <ul>
          <li>
            <a className="grey-text text-lighten-3" href="#!">
              Sebastian Wetzel
                  </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="#!">
              Lara Movsovich
                  </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="#!">
              Armando Rico
                  </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="#!">
              Luciano Moyano
                  </a>
          </li>
          <li>
            <a className="grey-text text-lighten-3" href="#!">
              Daniel Bordoli
                  </a>
          </li>
        </ul>
        <div className="footer-copyright">
          <div className="container">
            © 2020 Copyright Black Dahlia
            <a className="grey-text text-lighten-4 right" href="#!">

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
