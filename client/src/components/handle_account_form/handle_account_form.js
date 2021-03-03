import React from 'react';

import CreateNewAccount from './create_new_account';
import LoginAccount from './login_account_form';

const  HandleAccountForm = ({ mode }) => {

    const renderLogin = () => {
        return(   
            <div className="login-modal" id="login-modal-trans">
                <LoginAccount />
            </div>
        )  
    }
    const renderRegister = () => {
        return(         
            <div className="register-modal" id="register-modal-trans"> 
                <CreateNewAccount />
            </div>   
        )  
    }
    const modalBox = () => {
        return(
            <div className="wrap-modal-item">
                <div className="modal-header">
                        <a href="/login" id={ (mode === "login") ? "btn-trans-login" : "btn-trans-login-none" }>Đăng nhập</a>
                        <a href="/register" id={ (mode === "register") ? "btn-trans-new-ac" : "btn-trans-new-ac-none" }>Tạo tài khoản</a>
                        <div className="wrap-btn-close">
                            <a href="/" id="closeModal"><i className="fas fa-window-close"></i></a>
                        </div>
                </div>
                <div className="modal-body">
                    { mode === "login" ? renderLogin() : renderRegister() }
                </div>
            </div>
        )
    }

    return(   
            <div className="wrap-modal" id="wrap-modal-account">
                {modalBox()}
            </div>
    )
}

export default HandleAccountForm;