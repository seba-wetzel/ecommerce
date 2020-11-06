import React from 'react';

<<<<<<< HEAD
const SoloProductoComponent = ({ producto }) => {
    return (
        <div id='idModal' className='modal'>
            <div className='modal-content'>
                <div className="card">
                    <div className="card-image large">
                        <img src={producto.imgURL} height="50%" alt="" />
                        <span className="card-title">Card Title</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light #880e4f pink darken-4"> <i className="material-icons">shopping_basket</i></a>
                    </div>
                    <div className="card-content">
                        <table className='striped centered'>
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{producto.name}</td>
                                    <td>{producto.price}</td>
                                    <td> <span className="new badge green" data-badge-caption="">{producto.stock}</span></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div className="card-action">
                        <p>{producto.description}</p>
                    </div>
                </div>
            </div>


            <div className='modal-footer'>
                <a href='' className='btn modal-close'>Volver</a>
            </div>
        </div>
    );
}

=======
const SoloProductoComponent = ({producto}) => {
    return ( 
    <div id='idModal' className='modal'>
        <div className='modal-content'>
        <div className="card">
            <div className="card-image large">
                <img src={producto.imgURL} height="50%" alt="" />
                <span className="card-title">Card Title</span>
                <a className="btn-floating halfway-fab waves-effect waves-light #880e4f pink darken-4"> <i className="material-icons">shopping_basket</i></a>
            </div>
            <div className="card-content">
                <table className='striped centered'>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td> <span className="new badge green" data-badge-caption="">{producto.stock}</span></td>
                        </tr>
        
                    </tbody>
                </table>
            </div>
            <div className="card-action">
                <p>{producto.descripcion}</p>
            </div>
        </div>
    </div>
        

    <div className='modal-footer'>
        <a href='' className='btn modal-close'>Volver</a>
    </div>
  </div>
  );
}
 
>>>>>>> 5821f880f716e1a0b92fd77f029541c0684e15b5
export default SoloProductoComponent;