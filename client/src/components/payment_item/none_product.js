import { Link } from 'react-router-dom';

// Style App
import '../../style/payment_item/payment_item.css';

import Header from '../../containers/Header/Header';

const NoneProduct = () => {
    return (
        <div className="none_product_page">
            <Header />
            <div className="none_product_alert">
                <img src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" alt=""></img>
                <p>Không có sản phẩm nào trong giỏ hàng của bạn.</p>
                <Link to="/">Tiếp tục mua sắm</Link>
            </div>
        </div>
    )
}

export default NoneProduct;