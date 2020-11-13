import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createTicket } from "../redux/actions/checkout";

function Carrito() {
  const TOTAL = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.user.user);
  



  return (
    <div>
    { usuarios.email ? (
      <div className="container">
      <div className="row mb-6">
        <div className="col">
          <h2 className="d-flex justify-content-center mb-3">
            Realizar Compra
          </h2>
          <form id="procesar-pago" action="#">
            <ul>
              <li></li>
            </ul>
            <div id="carrito" className="table-responsive">
              <table className="table" id="lista-compra">
                <tr>
                  <th colSpan="4" scope="col" className="text-right">
                    TOTAL : {" " + TOTAL}{" "}
                  </th>
                  <th scope="col">
                    <p id="subtotal"></p>
                  </th>
                  <th scope="col"></th>
                </tr>

                <tr>
                  <th colSpan="4" scope="col" className="text-right">
                    DIREC. DE ENVIO :{" "}
                  </th>
                  <input></input>
                  <th scope="col">
                    <p id="igv"></p>
                  </th>
                  <th scope="col"></th>
                </tr>
              </table>
            </div>

            <div className="row justify-content-between">
              <div className="col-md-4 mb-2">
                <Link to="/" className="btn btn-info btn-block">
                  Seguir comprando
                </Link>
              </div>
              <hr></hr>
              <div className="col-xs-12 col-md-4"></div>
            </div>
          </form>
          <Link to="/dashboard">
          <button
           
            className="btn btn-success btn-block"
            id="procesar-compra"
            onClick={() => {
              dispatch(createTicket());
            }}
          >
            Realizar compra
          </button>
          </Link>
        </div>
      </div> 
      </div>

    ) : (<h4>

      <Link className="nav-wrapper #880e4f pink darken-4" to="/login">Iniciar sesión para poder comprar</Link>
    </h4>
    )
    
          }
          </div>
  );
}

export default Carrito;
