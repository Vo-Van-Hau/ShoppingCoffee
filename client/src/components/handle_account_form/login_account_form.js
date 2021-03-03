// Style App
import '../../style/handle_account_form/handle_account_form.css';

const LoginAccount = () => {

    return (
            <form action="http://localhost:3001/login" method="POST" id="form_login">
                <div className="login-email">
                    <label>Email / SĐT</label>
                    <input placeholder="Nhập Email hoặc Số điện thoại" className="input-login" name="email_numberphone" type="text" id="email_numberphone_login" required></input>
                </div>
                <div className="login-password">
                    <label>Mật khẩu</label>
                    <input placeholder="Mật khẩu từ 6 đến 32 ký tự" className="input-login" type="password" name="password" id="password_login" required></input>
                </div>
                <div className="forgot-password">
                    <span>Quên mật khẩu? Nhấn vào <a href="/">đây</a></span>
                </div>
                <div className="submit-form btn-handle-form">
                    <button type="submit" id="login_btn">Đăng nhập</button>
                </div>
                <div className="login-with-facebook btn-handle-form">
                    <button><i className="fab fa-facebook"></i>Đăng nhập bằng Facebook</button>
                </div>
                <div className="login-with-google btn-handle-form">
                    <button><i className="fab fa-google-plus-g"></i>Đăng nhập bằng Googke</button>
                </div>
            </form>
    )
}

export default LoginAccount;