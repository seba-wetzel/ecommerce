import React from 'react'
import { useDispatch } from 'react-redux'
import {
    addToQuantity,
    substractFromQuantity
} from '../redux/actions/cart'

const CartItem = ({ name, total, imgURL, item }) => {
    const dispatch = useDispatch()
    return (
        <div style={{ display: "flex" }}>
            <img src={imgURL} className="square" style={{ width: "35%", margin: "30px 0" }} alt="item1" />
            <p>{name}
                <span onClick={() => dispatch(substractFromQuantity(item))} className="new badge red" data-badge-caption="">-</span>
                <span className={"black-text"}>{total}</span>
                <span onClick={() => dispatch(addToQuantity(item))} className="new badge" data-badge-caption="">+</span>
            </p>
        </div>
    )
}

export default CartItem;