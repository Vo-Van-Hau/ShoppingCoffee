import { useState } from 'react';

// Children Components
import Header from '../../containers/Header/Header';
import Footer from '../../components/footer/footer';

// API model
import getProductSearch from '../../model/search_product/search_product';

// Style App
import '../../style/search_product/search.css';

import tet from '../../img/products/coffee/icon1-50x50.png';

const SearchResult = () => {

    const [getSearchResultProduct, setGetSearchResultProduct] = useState([]);

    getProductSearch(setGetSearchResultProduct);

    return (
        <div className="wrap_all_search_product">
            <Header />
            <div className="wrap_search_result">
                <div className="alert_search_result">
                    <p>Kết quả tìm kiếm cho từ khóa \ {getSearchResultProduct[getSearchResultProduct.length - 1]} \ : {getSearchResultProduct.length - 1} kết quả</p>
                </div>
                <ul>
                    {showSearchResult(getSearchResultProduct)} 
                </ul>
            </div>
            <Footer />
        </div>
    )
}

const showSearchResult = (getSearchResultProduct) => {

        for(let i = 0; i < getSearchResultProduct.length - 1; i++){

            let typeOfProduct;

            if(getSearchResultProduct[i].code_products === 1001){
                typeOfProduct = "hamburger";
            }else if(getSearchResultProduct[i].code_products === 1002){
                typeOfProduct = "coffee";
            }

            return (
                <li key={getSearchResultProduct[i].id}>
                    <a href={"http://localhost:3000/" + typeOfProduct + "/" + getSearchResultProduct[i].slug}>
                        <div className="heightlabel">
                            <label>Khuyến mãi</label>
                            <b>12%</b>
                        </div>
                        <img src={getSearchResultProduct[i].img} alt=""></img>
                        <aside className="result-label">
                            <img src={tet} alt=""></img>
                            <span>Tết chia sẽ</span>
                        </aside>
                        <h3>{getSearchResultProduct[i].name}</h3>
                        <div className="price">
                            <strong>{getSearchResultProduct[i].price} Đ</strong>
                            <span>36,000 Đ</span>
                            <i>-12%</i>
                        </div>
                    </a>
                </li>
            )
        }

}

export default SearchResult;