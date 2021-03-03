import React from 'react';
import { Link } from "react-router-dom";

import milkcoffee from '../../img/products/coffee/milk_coffee.jpg';
import tet from '../../img/products/coffee/icon1-50x50.png';

const SuggestionProduct = () => {
    return (
        <div className="wrap-relative-product">
            <div className="relative-product">
                <div id="alert-compare">
                    <span>SẢN PHẨM TƯƠNG TỰ</span>
                </div>
                <div id="main_coffee_items">
                    <ul>
                        <li>
                            <Link to="/">
                                <div className="heightlabel">
                                    <label>Khuyến mãi</label>
                                    <b>12%</b>
                                </div>
                                <img src={milkcoffee} alt=""></img>
                                <aside className="result-label">
                                    <img src={tet} alt=""></img>
                                    <span>Tết chia sẽ</span>
                                </aside>
                                <h3>Cà phê sữa</h3>
                                <div className="price">
                                    <strong>32,000 Đ</strong>
                                    <span>36,000 Đ</span>
                                    <i>-12%</i>
                                </div>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/coffee">
                                <div className="heightlabel">
                                    <label>Khuyến mãi</label>
                                    <b>12%</b>
                                </div>
                                <img src={black_coffee}></img>
                                <aside className="result-label">
                                    <img src={tet}></img>
                                    <span>Tết chia sẽ</span>
                                </aside>
                                <h3>Cà phê đen</h3>
                                <div className="price">
                                    <strong>32,000 Đ</strong>
                                    <span>36,000 Đ</span>
                                    <i>-12%</i>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/coffee">
                                <div className="heightlabel">
                                    <label>Khuyến mãi</label>
                                    <b>12%</b>
                                </div>
                                <img src={latte}></img>
                                <aside className="result-label">
                                    <img src={tet}></img>
                                    <span>Tết chia sẽ</span>
                                </aside>
                                <h3>Latte</h3>
                                <div className="price">
                                    <strong>32,000 Đ</strong>
                                    <span>36,000 Đ</span>
                                    <i>-12%</i>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/coffee">
                                <div className="heightlabel">
                                    <label>Khuyến mãi</label>
                                    <b>12%</b>
                                </div>
                                <img src={caramel}></img>
                                <aside className="result-label">
                                    <img src={tet}></img>
                                    <span>Tết chia sẽ</span>
                                </aside>
                                <h3>Caramel</h3>
                                <div className="price">
                                    <strong>32,000 Đ</strong>
                                    <span>36,000 Đ</span>
                                    <i>-12%</i>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/coffee">
                                <div className="heightlabel">
                                    <label>Khuyến mãi</label>
                                    <b>12%</b>
                                </div>
                                <img src={mocha}></img>
                                <aside className="result-label">
                                    <img src={tet}></img>
                                    <span>Tết chia sẽ</span>
                                </aside>
                                <h3>Mocha</h3>
                                <div className="price">
                                    <strong>32,000 Đ</strong>
                                    <span>36,000 Đ</span>
                                    <i>-12%</i>
                                </div>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    ) 
}

export default SuggestionProduct;