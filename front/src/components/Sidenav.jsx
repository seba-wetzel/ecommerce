import React from 'react'
import { Link } from 'react-router-dom';


const Sidenav = () => {
    return (

        <div>
            <ul>
                <li className="active">
                    <a href="#" data-target="slide-out" className="sidenav-trigger">
                        <i className="material-icons">shopping_cart</i>
                    </a>
                </li>
            </ul>
            <ul id="slide-out" className="sidenav">
                <li><div className="user-view">
                    <div className="background">
                        <img src="https://p4.wallpaperbetter.com/wallpaper/166/732/28/retro-style-digital-art-1980s-wallpaper-preview.jpg" alt="" />
                    </div>
                    <a href="#user"><img className="circle" src="https://media.discordapp.net/attachments/767162173595582496/774108042744299521/descarga.png?width=616&height=677" /></a>
                    <a href="#name"><span className="white-text name">Luchito p4</span></a>
                    <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                </div></li>

                <li>
                    <a href="#!"><i className="material-icons">shopping_cart</i>
                        <span className="new badge gray" data-badge-caption="">3 Total: 4999$ </span></a></li>
                <li><div className="divider"></div></li>

                <li><a href="#!">Corpiño<span className="new badge" data-badge-caption="">+</span><span className="new badge red" data-badge-caption="">-</span></a></li>

                <li>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
                    <span>Sony DSC-RX100M III</span>
                    <span className="item-price">$849.99</span>
                    <span className="item-quantity">Quantity: 01</span>
                </li>

                <li><div className="divider"></div></li>
                <li><Link to='/shopping' className="btn blue waves-effect waves-purple">Check Out</Link></li>
                
            </ul>
            <a href="/shopping" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">shopping_cart</i></a>
        </div>
    )
}




export default Sidenav