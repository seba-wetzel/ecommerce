import React from 'react';

const ProductosCarrousel = () => {
    return ( 

        <div className="slider ">
        <ul className="slides">
          <li>
            <img src="https://ae01.alicdn.com/kf/H4db7038e50304ba8b5e7452e9894170dO.jpg_q50.jpg" alt=""/>
            <div className="caption center-align">
              <h3>This is our big Tagline!</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="https://falabella.scene7.com/is/image/FalabellaAR/5063460_1?wid=1004&hei=1500&crop=248,0,1004,1500&qlt=70" alt=""/> 
            <div className="caption left-align">
              <h3>Left Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="https://images-na.ssl-images-amazon.com/images/I/815V9%2Bj68-L._AC_UX342_.jpg" alt=""/> 
            <div className="caption right-align">
              <h3>Right Aligned Caption</h3>
              <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
            </div>
          </li>
          <li>
            <img src="https://images-na.ssl-images-amazon.com/images/I/7166nLpt-wL._AC_UY1000_.jpg" alt=""/>
            <div className="caption center-align">
              <h3>Hawiton Pijama Mujer Verano</h3>
              <h5 className="light grey-text text-lighten-3">Hawiton Pijama Mujer Verano Corto Raso Pijamas Saten Sexy 2 Piezas de Encaje</h5>
            </div>
          </li>
        </ul>
      </div>
     );
}
 
export default ProductosCarrousel;