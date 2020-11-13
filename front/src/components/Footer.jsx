import React from "react";
const Footer = () => {
  return (
    <div className="FootBar">
      <footer className="#880e4f pink darken-4">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text"></h5>
              <p className="grey-text text-lighten-4"></p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">E-commerce-2020</h5>
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
                    Daniel Gordoli
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2020 Copyright Black Dahlia
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
