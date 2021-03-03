import React, { useState } from 'react';

const OrderProduct = ({ product_item, cart, onAddToCart}) => {

    const [quantity, setQuantity] = useState(1);

    const onAddToCarts = (product_item) => {
        onAddToCart(product_item, quantity);
        setQuantity(1);
    }

    const countProductQuantity = (state_quantity) => {
        if(state_quantity > 0){
            setQuantity(state_quantity);
        }
    }

    return (
        <div className="order-product">
            <div className="product-name">
                <span>{product_item.name}</span>
                <div className="share-feeling">
                    <button type="button"><i className="far fa-heart"></i></button>
                    <button type="button"><i className="fas fa-share-alt"></i></button>
                </div>
            </div>
            <div className="intro-product">
                <p>
                    Cà phê phin kết hợp cũng sữa đặc là một sáng tạo đầy tự hào của người Việt, được xem món uống thương hiệu của Việt Nam.
                </p>
            </div>
            <div className="counter-quantity-product">
                    <div className="price_product_item">
                        <span>{product_item.price}<sup>đ</sup></span>
                    </div>
                    <div className="status_number_product">
                        <button type="button" onClick={ () => countProductQuantity(quantity - 1) }>
                            <i className="fas fa-minus"></i>
                        </button>
                        <span>{ quantity }</span>
                        <button type="button" onClick={ () => countProductQuantity(quantity + 1) }>
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>
            </div>
            <div className="btn-add-cart">
                <button type="button" 
                        onClick={() => onAddToCarts(product_item)}
                >Thêm vào giỏ hàng</button>
            </div>
        </div>
    ) 
}

export default OrderProduct;