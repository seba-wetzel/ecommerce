import React, {useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux'
import {fetchProductById} from '../redux/actions/products'
import {addToCart} from '../redux/actions/cart'
import { useParams, Link } from "react-router-dom";
import Review from './Review';

const SoloProductoComponent = () => {
    const producto = useSelector(state => state.products.selectProduct)
    const dispatch = useDispatch()
    const params = useParams();
    useEffect(()=>{
        dispatch(fetchProductById(params.id))
    }, [])

    
    const add = (id) => {
    dispatch(addToCart(id))
    console.log('producto', producto) 
}
   return  ( 
         
    <div className='container'>   
        <div className='row'>   
            <div class="col s12">
                <div class="card horizontal">
                    <div class="card-image">
                        {producto.imgURL? <img src={producto.imgURL[0]} alt=''/> : null}
                    </div>
                    <div class="card-stacked">
                    <h1 class="header">{producto.name}</h1>
                        <div class="card-content">
                                <p>{producto.description}</p>
                                <p><h3>${producto.price}</h3></p>
                                {producto.available==true? <p className="btn green waves-effect waves-purple">Stock</p> : <p className="btn gray waves-effect waves-purple">Sin stock</p>}
                                <div><Review/></div>
                        </div>
                        <div class="card-action #ba68c8 purple lighten-2">
                                <Link to='/' className='btn #4a148c purple darken-4'><i className="material-icons">arrow_back</i>Volver</Link>
                                <a onClick={() => add(producto._id)} className='btn #4a148c purple darken-4'><i className="material-icons">shopping_basket </i>Agregar al Carrito</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    
 ); 
}

export default SoloProductoComponent;
    

        


        // <div id='idModal' className='modal'>
        //     <div className='modal-content'>
        //         <div className="card">
        //             <div className="card-image large">
        //                 <img src={producto.imgURL} height="50%" alt="" />
        //                 <span className="card-title">Card Title</span>
        //                 <a className="btn-floating halfway-fab waves-effect waves-light #880e4f pink darken-4"> <i className="material-icons">shopping_basket</i></a>
        //             </div>
        //             <div className="card-content">
        //                 <table className='striped centered'>
        //                     <thead>
        //                         <tr>
        //                             <th>Producto</th>
        //                             <th>Precio</th>
        //                             <th>Stock</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         <tr>
        //                             <td>{producto.name}</td>
        //                             <td>{producto.price}</td>
        //                             <td> <span className="new badge green" data-badge-caption="">{producto.stock}</span></td>
        //                         </tr>

        //                     </tbody>
        //                 </table>
        //             </div>
        //             <div className="card-action">
        //                 <p>{producto.description}</p>
        //             </div>
        //         </div>
        //     </div>


        //     <div className='modal-footer'>
        //         <a href='' className='btn modal-close'>Volver</a>
        //     </div>
        // </div>





