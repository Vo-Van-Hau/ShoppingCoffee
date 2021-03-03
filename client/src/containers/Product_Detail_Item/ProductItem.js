import { useState } from 'react';
import { connect } from 'react-redux';

//  User Actions
import { onAddToCart } from '../../actions/index';

// Style App
import '../../style/detail_product_item/detail_product_item.css'

// Components children
import Header from '../Header/Header';
import Footer from '../../components/footer/footer';
import ImageSymbolic from '../../components/detail_product_item/img_symbolic';
import OrderProduct from '../../components/detail_product_item/order_product';
// import ExplainProduct from '../../components/detail_product_item/explain_product';
// import SuggestionProduct from '../../components/detail_product_item/suggestion-product';

// API Product
import getProducts from '../../model/products/products';

const ProductItem = ({ cart, onAddToCart }) => {
 
    const [productList, setProductList] = useState([]);

    getProducts(setProductList);

    return ( 
        <div id="wrap_detail_product_items_all">
            <Header />
                {showProductDetail(cart, onAddToCart, productList)}
            <Footer />
        </div>
    )
}

const showProductDetail = (cart, onAddToCart, productList) => {

    const id_URL = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]; // name of product
    
    const product_item = productList.filter( (item) => {
        return item.slug === id_URL;
    })

    return (
        product_item.map((product_item, index) => {
            return (
                <div id="wrap_detail_product_item_all" key={product_item.id}>
                    <div id="wrap_detail_product_item">
                        <ImageSymbolic 
                            product_item={product_item}
                        />
                        <OrderProduct 
                            product_item={product_item}
                            cart={cart}
                            onAddToCart={onAddToCart}
                        />
                        {/* <ExplainProduct 
                            product_item={product_item}
                        /> */}
                        {/* <SuggestionProduct /> */}
                    </div>
                </div>
            )
        })
    )
}

const mapStatetoProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapActionstoProps = {
    onAddToCart
}

export default connect(mapStatetoProps, mapActionstoProps)(ProductItem);