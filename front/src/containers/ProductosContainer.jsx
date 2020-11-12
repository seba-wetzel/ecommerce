import React, { useEffect } from "react";
import ProductosComponent from "../components/ProductosComponent";
import ProductosCarrousel from "../components/ProductosCarrousel";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  filterProductsByCategory,
} from "../redux/actions/products";

const ProductosContainer = () => {
  const datos1 = useSelector((state) => state.products);
  const productsFiltered = useSelector(
    (state) => state.products.filterProducts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    return () => {};
  }, []);

  useEffect(() => {
    console.log(datos1);
    return () => {};
  }, [datos1]);

  const handlerTab = (filter) => dispatch(filterProductsByCategory(filter));

  return (
    <div className="container section">
      <div className="row">
        <ProductosCarrousel />
        <ul class="tabs tabs-fixed-width tab-demo z-depth-2 #880e4f pink darken-4">
          {/* faltan ternarios, si hay estos productos que se muestren, de lo contrario que responda "NO HAY STOCK" */}
          <li class="tab active">
            <a href="#test1" onClick={() => handlerTab("")}>
              Todos
            </a>
          </li>
          {/* faltan ternarios */}
          <li class="tab">
            <a href="#test1" onClick={() => handlerTab("corpiños")}>
              Corpiños
            </a>
          </li>
          {/* faltan ternarios */}
          <li class="tab">
            <a href="#test2" onClick={() => handlerTab("tanga")}>
              Tanga
            </a>
          </li>
          {/* faltan ternarios */}
          <li class="tab">
            <a href="#test3" onClick={() => handlerTab("pijama")}>
              Pijamas
            </a>
          </li>
          {/* faltan ternarios */}
          <li class="tab">
            <a href="#test4" onClick={() => handlerTab("bombacha")}>
              Bombacha
            </a>
          </li>
        </ul>

        {productsFiltered
          ? productsFiltered.map((producto, i) => {
              return <ProductosComponent key={i} producto={producto} />;
            })
          : datos1.products.map((producto, i) => {
              return <ProductosComponent key={i} producto={producto} />;
            })}
      </div>
    </div>
  );
};

export default ProductosContainer;
