import React from 'react';
import { Link } from 'react-router-dom'

function Carrito() {

    return (
        <div className="container">
            <div className="row mb-6">
                <div className="col">
                    <h2 className="d-flex justify-content-center mb-3">Realizar Compra</h2>
                    <form id="procesar-pago" action="#">
                        <ul>
                            <li></li>
                        </ul>
                        <div id="carrito" className="table-responsive">
                            <table className="table" id="lista-compra">
                                <thead>
                                    <tr>
                                        <th scope="col">Imagen</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Sub Total</th>
                                        <th scope="col">Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                                <tr>
                                    <th colspan="4" scope="col" className="text-right">SUB TOTAL :</th>
                                    <th scope="col">
                                        <p id="subtotal"></p>
                                    </th>
                                    <th scope="col"></th>
                                </tr>
                                <tr>
                                    <th colspan="4" scope="col" className="text-right">IGV :</th>
                                    <th scope="col">
                                        <p id="igv"></p>
                                    </th>
                                    <th scope="col"></th>
                                </tr>
                                <tr>
                                    <th colspan="4" scope="col" className="text-right">TOTAL :</th>
                                    <th scope="col">
                                        <p id="total"></p>
                                    </th>
                                    <th scope="col"></th>
                                </tr>

                            </table>
                        </div>

                        <div className="row justify-content-between">
                            <div className="col-md-4 mb-2">
                                <Link to="/" className="btn btn-info btn-block">Seguir comprando</Link>
                            </div>
                            <hr></hr>
                            <div className="col-xs-12 col-md-4">
                                <a href="/" className="btn btn-success btn-block" id="procesar-compra">Realizar compra</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Carrito;