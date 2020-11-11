import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchShopping } from "../redux/actions/checkout";
function Carrito() {
  const TOTAL = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  return (
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
          <button
            className="btn btn-success btn-block"
            id="procesar-compra"
            onClick={() => {
              dispatch(fetchShopping());
            }}
          >
            Realizar compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
