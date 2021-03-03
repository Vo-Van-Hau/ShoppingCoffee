import React from 'react';
import { Link } from "react-router-dom";

const NotificationCart = ({ cart }) => {

    let totalProductQuantity = cart.length;

    return (
        <div id="cart">
            <span id="numbers_of_products">{totalProductQuantity}</span>
            <Link to="/checkout/cart"><i className="fas fa-cart-arrow-down"></i><span>Giỏ Hàng</span></Link>
        </div>
    ) 
}

export default NotificationCart;