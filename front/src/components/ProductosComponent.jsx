import React from 'react';
import { Link } from 'react-router-dom'
import SoloProductoComponent from './SoloProductoComponent';


const ProductosComponent = ({ producto }) => {
    return (



        <div className='col s4 m3'>
            <div className="card hoverable">
                <div className="card-image ">
                    <img src={producto.imgURL} alt="" />

                    <i className="btn-floating halfway-fab waves-effect waves-light #880e4f pink darken-4">
                        <i className="material-icons">shopping_basket</i>
                    </i>
                </div>

                <div className="card-content">
                    <span className="card-title">{producto.name}</span>
                    <p>{producto.description}</p>
                </div>
                <div className="card-action center">
                    <a href="#idModal" className='btn modal-trigger red '>Detalles</a>
                </div>
            </div>
        </div>


    );
}

export default ProductosComponent;