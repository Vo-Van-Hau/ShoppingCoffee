import { Link } from 'react-router-dom';

const ListingCart = ({ cart, updateProductItemQuantity, deleteProductItem }) => {

    const showCartItem = (cart) => {
        return (
            cart.map( (item) => {
                return (
                    <li key={item.product.id}>
                        <Link to="">
                            <img src={item.product.img} alt=""></img>
                            <span></span>
                        </Link>
                        <div className="infor_product_item">
                            <strong>{item.product.name}</strong>
                            <button type="button"
                                    onClick={ () => deleteProductItems(item.product) }><i className="far fa-trash-alt"></i>Xóa
                            </button>
                        </div>
                        <div className="couter-product">
                            <div className="price_product_item">
                                <span>{item.product.price}<sup>đ</sup></span>
                            </div>
                            <div className="status_number_product">
                                <button type="button"><i className="fas fa-minus"
                                        onClick={ () => countProductQuantity(item.product, item.quantity - 1) }></i>
                                </button>
                                <span>{item.quantity}</span>
                                <button type="button"
                                        onClick={ () => countProductQuantity(item.product, item.quantity + 1) }><i className="fas fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </li>
                )
            })
        )
    }
    
    const countProductQuantity = (product, quantity) => {
        if(quantity > 0){
            updateProductItemQuantity(product, quantity);
        }
    }

    const deleteProductItems = (product) => {
        deleteProductItem(product);
    }

    return(
        <div id="listing-cart">
            <ul>
                {showCartItem(cart)}
            </ul>
        </div>
    )
}

export default ListingCart;