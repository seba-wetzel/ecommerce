import React, { useEffect } from "react";
import ProductosComponent from '../components/ProductosComponent'
import ProductosCarrousel from '../components/ProductosCarrousel'
import datos from '../datos'
import { useDispatch, useSelector } from "react-redux"
import { fetchProducts } from '../redux/actions/products'

const ProductosContainer = () => {
  const datos1 = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
    return () => { }
  }, [])

  useEffect(() => {
    console.log(datos1)
    return () => { }
  }, [datos1])

  return (
    <div className='container section' >
      <div className='row'>
        <ProductosCarrousel />
        <ul class="tabs tabs-fixed-width tab-demo z-depth-2 #880e4f pink darken-4">
          <li class="tab"><a href="#test1">Corpiños</a></li>
          <li class="tab"><a class="active" href="#test2">Tanga</a></li>
          <li class="tab"><a href="#test3">Pijamas</a></li>
          <li class="tab"><a href="#test4">Bombacha</a></li>

        </ul>
        <div id="test1" class="col s12"><p>Test 1</p></div>
        <div id="test2" class="col s12"><p>Test 2</p></div>
        <div id="test3" class="col s12"><p>Test 3</p></div>
        <div id="test4" class="col s12"><p>Test 4</p></div>

        {datos.map((producto, i) => {
          return <ProductosComponent key={i} producto={producto} />
        })}
      </div>
    </div>
  );
}

export default ProductosContainer;

