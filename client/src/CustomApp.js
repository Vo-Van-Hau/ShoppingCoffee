import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import App from './App';
import Cart from './containers/Cart/Cart';
import DetailProduct from './containers/Product_Detail_Item/ProductItem';
import HandleAccountForm from './components/handle_account_form/handle_account_form';
import ProductMenu from './components/menu_products/products';
import SearchResult from './components/search_product/search_result_item';
import NoSearchResult from './components/search_product/search_no_result';

// Admin Components
import MainAdmin from './components/admin/main';

const CustomApp = () => {

    return (
        <BrowserRouter>
           <Switch>

                <Route path="/" exact={true}>
                        <App />
                </Route>

                <Route path="/checkout/cart">
                    <Cart />
                </Route>

                <Route path="/coffee">
                    <DetailProduct />
                </Route>

                <Route path="/hamburger">
                    <DetailProduct />
                </Route>

                <Route path="/login">
                    <HandleAccountForm 
                        mode="login"
                    />
                </Route>

                <Route path="/register">
                    <HandleAccountForm 
                        mode="register"
                    />
                </Route>

                <Route path="/menu/hamburger" exact={true}>
                    <ProductMenu />
                </Route>

                <Route path="/menu/coffee" exact={true}>
                    <ProductMenu />
                </Route>

                <Route path="/search/products">
                    <SearchResult />
                </Route>

                <Route path="/search/none">
                    <NoSearchResult />
                </Route>

                    {/* Admin area */}
                        <Route path="/admin">
                            <MainAdmin />
                        </Route>

                        <Route path="/data/admin/products">
                            <MainAdmin />
                        </Route>
                        {/* <Route path="/data/add/products">
                            <MainAdmin />
                        </Route>
                        <Route path="/data/up-da-te/products">
                            <MainAdmin />
                        </Route>
                        <Route path="/data/de-le-te/products">
                            <MainAdmin />
                        </Route> */}

                        <Route path="/data/admin/navigation-bar">
                            <MainAdmin />
                        </Route>

           </Switch>
       </BrowserRouter>
    )
};

export default CustomApp;