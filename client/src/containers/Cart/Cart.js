import { connect } from 'react-redux';

// Style App
import '../../style/payment_item/payment_item.css';

// Components children
import ListingCart from '../../components/payment_item/listing_cart';
import PaymentTable from '../../components/payment_item/payment_table';
import NoneProduct from '../../components/payment_item/none_product';

// user actions
import { updateProductItemQuantity, deleteProductItem } from '../../actions/index';

const Cart = ({ cart, updateProductItemQuantity, deleteProductItem }) => {

    let totalProductQuantity = cart.length;

    return(

        totalProductQuantity === 0 ? <NoneProduct /> : 
            <div id="wrap_payment_items_all">
                <div id="wrap_payment_item_all">
                    <div id="total-cart">
                        <span>GIỎ HÀNG <i>( {totalProductQuantity} sản phẩm )</i></span>
                    </div>
                    <ListingCart 
                        cart={cart}
                        updateProductItemQuantity={updateProductItemQuantity}
                        deleteProductItem={deleteProductItem}
                    />
                    <PaymentTable 
                        cart={cart}
                    />
                </div>
            </div>

    )
}

const mapStatetoProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapActionstoProps = {
    updateProductItemQuantity,
    deleteProductItem
}

export default connect(mapStatetoProps, mapActionstoProps)(Cart);