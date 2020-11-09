import React, {useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux'
import {fetchProductById} from '../redux/actions/products'
import {addToCart} from '../redux/actions/cart'
import { useParams } from "react-router-dom";

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
         
        (<div class="col s12 m7">
        <h2 class="header">{producto.name}</h2>
            <div class="card horizontal">
                <div class="card-image">
                    {producto.imgURL? <img src={'..' + producto.imgURL[0]} alt=''/> : null}
                    
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>{producto.description}</p>
                    </div>
                    <div class="card-action">
                    
                        <a href="#">ASDASD</a>
                        <a className="btn-floating halfway-fab waves-effect waves-light #880e4f pink darken-4">
                        <i onClick={() => add(producto._id)} className="material-icons">shopping_basket</i>
                    </a>
                        
                                            
                    </div>
                </div>
            </div>
            
        </div>) 
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





