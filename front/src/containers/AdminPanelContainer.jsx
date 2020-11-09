import React, { useEffect } from "react";
import AdminPanel from "../components/AdminPanel";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/products";

const AdminPanelContainer = () => {
  const datos1 = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    return () => {};
  }, []);

  useEffect(() => {
    console.log(datos1);
    return () => {};
  }, [datos1]);

  return (
    <div className="container section">
      <div className="row">
        <ul class="tabs tabs-fixed-width tab-demo z-depth-2 #880e4f pink darken-4">
          <li class="tab">
            <a href="#test1">Productos</a>
          </li>
          <li class="tab">
            <a class="active" href="#test2">
              Usuarios
            </a>
          </li>
        </ul>

        {datos1.products.map((producto, i) => {
          return <AdminPanel key={i} producto={producto} />;
        })}
      </div>
    </div>
  );
};

export default AdminPanelContainer;
