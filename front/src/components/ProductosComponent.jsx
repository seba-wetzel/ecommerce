import React from 'react';


const ProductosComponent = ({producto}) => {
    console.log(producto, 'PRUEBA 2 ASDDDDDDDDSSSSSSSSSSSSS')
    return ( 
            
            

            <div className='col s4 m3'>
                <div className="card hoverable">
                    <div className="card-image ">
                        <img src={producto.imgURL} alt=""/>
                        <a className="btn-floating halfway-fab waves-effect waves-light #880e4f pink darken-4">
                        <i class="material-icons">shopping_basket</i></a>
                    </div>
              
                    <div className="card-content">
                        <span className="card-title">{producto.nombre}</span>
                        <p>{producto.descripcion}</p>
                    </div>
                    <div className="card-action">
                        <a href="#idModal" className='btn modal-trigger red'>Detalles</a>
                    </div>
                </div>
            </div>
           
    );
}
 
export default ProductosComponent;