import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

// Components Children
import HeaderNavbar from '../../components/header/header_navbar';
import Search from '../../components/header/search';
import NotificationCart from '../../components/header/notification_cart';
import UserAccount from '../../components/header/user_account';

const Header = ({ cart }) => {
    return (
        <div id="wrap_header_all">
            <div id="wrap_header">
                <div id="main_logo">
                    <Link to="/">FanthBol-Coffee</Link>
                </div>
                <Search />
                <NotificationCart 
                    cart={cart}
                />
                <UserAccount />
            </div>
            <HeaderNavbar />
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapActionstoProps = {

}

export default connect(mapStatetoProps, mapActionstoProps)(Header);