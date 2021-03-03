import React from 'react';

export default function HeaderNavbar(){
    return (
        <div className="header-navbar-items">
                <ul>
                    <li><a href="/">Thương hiệu</a></li>
                    <li className="main-items">
                        <a href="/">Đồ uống</a>
                        <ul>
                            <li><a href="/menu/coffee">Cà phê</a></li>
                            <li><a href="/">Trà sữa</a></li>
                            <li><a href="/">Sinh tố</a></li>
                            <li><a href="/">Thức uống trái cây</a></li>
                        </ul>
                    </li>
                    <li className="main-items">
                        <a href="/">Món ăn</a>
                        <ul>
                            <li><a href="/menu/hamburger">Hamburger</a></li>
                            <li><a href="/">Bánh mì</a></li>
                            <li><a href="/">Trái cây sấy</a></li>
                        </ul>
                    </li>
                    <li><a href="/">Khuyến mãi</a></li>
                    <li><a href="/">Nhượng quyền</a></li>
                </ul>
        </div>
    ) 
}