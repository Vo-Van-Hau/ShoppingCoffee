// Style App
import '../../style/admin/admin.css';

import NaviProduct from './item_navigation/products';
import ProductProcess from './item_process/product/product_main';

const ActionProcess = () => {

    const URL_id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]; // type of action;

    return (
        <div className="menu-item">
            <div className="navigation-menu-item-func">
                <p>{ URL_id === "products" ? "PRODUCT" : URL_id === "navigation-bar" ? "NAVIGATION BAR" : "" }<i className="fas fa-angle-down"></i></p>
                { URL_id === "products" ? <NaviProduct /> : "" }
            </div>
            <div className="item-process">
                { URL_id === "products" ? <ProductProcess /> : "" }   
            </div>
        </div>
    )
}

export default ActionProcess;