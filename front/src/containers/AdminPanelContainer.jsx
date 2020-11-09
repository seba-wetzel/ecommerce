import React, { useEffect } from "react";
import ProductPanel from "../components/ProductPanel";
import UserPanel from "../components/UserPanel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProducts,
  postProduct,
  removeProduct,
  updatedProduct,
} from "../redux/actions/products";

const AdminPanelContainer = () => {
  const productos = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    return () => {};
  }, []);

  useEffect(() => {
    console.log(productos);
    return () => {};
  }, [productos]);

  return (
    <div className="container section">
      <div className="row">
        <ul className="tabs tabs-fixed-width tabs-swipe-demo z-depth-2 #880e4f pink darken-4">
          <li className="tab">
            <a className="active" href="#productos_tabla">
              Productos
            </a>
          </li>
          <li className="tab">
            <a href="#usuarios_tabla">Usuarios</a>
          </li>
        </ul>

        <div id="productos_tabla">
          <table className="striped grey lighten-4">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Imagen</th>
                <th>Disponible</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {productos.products.map((producto, i) => {
                return <ProductPanel key={i} producto={producto} />;
              })}
            </tbody>
          </table>

          <Link
            class="waves-effect waves-light btn #880e4f pink darken-4"
            to="/newproduct"
          >
            {" "}
            Nuevo Producto{" "}
          </Link>
        </div>

        <div id="usuarios_tabla">
          <table class="striped grey lighten-4">
            <thead>
              <tr>
                <th>Email</th>
                <th>Rol</th>
                <th>Compras</th>
                <th>Carrito</th>
                <th>Comentarios</th>
                <th>Ratings</th>
                <th>Editar</th>
              </tr>
            </thead>
            {/* de donde me traigo los usuarios??? */}
            {/* <tbody>
            {productos.products.map((producto, i) => {
              return <UserPanel key={i} user={user} />;
            })}
          </tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelContainer;
