import React, { useState } from 'react';
import { Link } from "react-router-dom";

// API Model
import getProducts from '../../model/products/products';

import Header from '../../containers/Header/Header';
import Footer from '../footer/footer';
import CoffeeNavigation from '../body/coffee';
import HamburgerNavigation from '../body/hamburger';

// Style App
import '../../style/menu/products.css';

// image
import tet from '../../img/products/coffee/icon1-50x50.png';

const ProductMenu = () => {

    const id_URL = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]; // type of product

    const [productList, setProductList] = useState([]);

    getProducts(setProductList);

    return (
        <div className="wrap_menu">
            <Header />
            <div className="main_items_product">
                { id_URL === "coffee" ? <CoffeeNavigation /> : <HamburgerNavigation /> }
                <div className="main_list_items">
                    <ul>
                        {showProductMenu(productList, id_URL)}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    ) 
}

const showProductMenu = (productList, id_URL) => {

    let ProductMenu = [];

    if(id_URL === "hamburger"){
        ProductMenu = productList.filter((item) => {
            return item.code_products === 1001;
        })
    }else if(id_URL === "coffee"){
        ProductMenu = productList.filter((item) => {
            return item.code_products === 1002;
        })
    }
    
    return(
        ProductMenu.map( (item, index) => {
            return (
                <li key={item.id}>
                    <Link to={ "/" + id_URL + "/" + item.slug}>
                        <div className="heightlabel">
                            <label>Khuyến mãi</label>
                            <b>{((item.discount*100)/(item.price + item.discount)).toFixed(1)}%</b>
                        </div>
                        <img src={item.img} alt=""></img>
                        <aside className="result-label">
                            <img src={tet} alt=""></img>
                            <span>Tết chia sẽ</span>
                        </aside>
                        <h3>{item.name}</h3>
                        <div className="price">
                            <strong>{item.price} Đ</strong>
                            <span>{item.price + item.discount}</span>
                            <i>-{((item.discount*100)/(item.price + item.discount)).toFixed(1)}%</i>
                        </div>
                    </Link>
                </li>
            )
        } )
    )
}

export default ProductMenu;