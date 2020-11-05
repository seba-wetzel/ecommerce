import React from "react";
import ProductosComponent from '../components/ProductosComponent'
import ProductosCarrousel from '../components/ProductosCarrousel'
import datos from '../datos'

const ProductosContainer = () => {
  return ( 
    <div className='container section' >
            <div className='row'>
              <ProductosCarrousel/>
              {datos.map((producto, i) => {

                return <ProductosComponent key={i} producto={producto} />
                // console.log(producto, 'PRUEBAAAAAAAAAAAAAAA 1')
              })}

              

            </div>
          </div>
   );
}
 
export default ProductosContainer;

