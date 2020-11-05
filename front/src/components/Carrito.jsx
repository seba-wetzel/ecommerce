import React from 'react';

class Carrito extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="container">
                <div class="row mt-3">
                    <div class="col">
                        <h2 class="d-flex justify-content-center mb-3">Realizar Compra</h2>
                        <form id="procesar-pago" action="#">
                            <ul>
                                <li></li>
                            </ul>

                            <div id="carrito" class="table-responsive">
                                <table class="table" id="lista-compra">
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
                                        <th colspan="4" scope="col" class="text-right">SUB TOTAL :</th>
                                        <th scope="col">
                                            <p id="subtotal"></p>
                                        </th>
                                        <th scope="col"></th> 
                                    </tr>
                                    <tr>
                                        <th colspan="4" scope="col" class="text-right">IGV :</th>
                                        <th scope="col">
                                            <p id="igv"></p>
                                        </th>
                                         <th scope="col"></th> 
                                    </tr>
                                    <tr>
                                        <th colspan="4" scope="col" class="text-right">TOTAL :</th>
                                        <th scope="col">
                                            <p id="total"></p>
                                        </th>
                                        <th scope="col"></th> 
                                    </tr>

                                </table>
                            </div>

                            <div class="row justify-content-between">
                                <div class="col-md-4 mb-2">
                                    <a href="index.html" class="btn btn-info btn-block">Seguir comprando</a>
                                </div>
                                <hr></hr>
                                <div class="col-xs-12 col-md-4">
                                    <a href="" class="btn btn-success btn-block" id="procesar-compra">Realizar compra</a>
                                </div>
                            </div>
                        </form>


                    </div>


                </div>

            </div>
        );
    }
}
 
export default Carrito;