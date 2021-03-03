import React from 'react';

const CreateNewAccount = () => {

    return(
            <form action="http://localhost:3001/register" method="POST">

                <div className="wrap-items-input-register name">
                    <label htmlFor="name">Họ tên</label>
                    <input placeholder="Nhập họ tên" id="name" name="name" type="text" className="input-register"></input>
                </div>
                <div className="wrap-items-input-register numberphone">
                    <label htmlFor="numberphone">SĐT</label>
                    <input placeholder="Nhập số điện thoại" id="numberphone" name="numberphone" type="text" className="input-register"></input>
                </div>
                <div className="wrap-items-input-register email">
                    <label htmlFor="email">Email</label>
                    <input placeholder="Nhập email của bạn" id="email" name="email" type="email" className="input-register"></input>
                </div>
                <div className="wrap-items-input-register password">
                    <label htmlFor="password">Mật khẩu</label>
                    <input placeholder="Thiết lập mật khẩu của bạn" id="password" name="password" type="password" className="input-register"></input>
                </div>
                 <div className="wrap-items-input-register password">
                    <label htmlFor="address">Địa chỉ</label>
                    <input placeholder="Nhập địa chỉ của bạn" id="adress" name="address" type="text" className="input-register"></input>
                </div>
                <div className="wrap-items-input-register gender">
                    <label>Giới tính</label>
                        <div className="gender-items">
                            <input type="radio" id="male" name="gender" value="male"></input>
                                <label htmlFor="male">Nam</label>
                            <input type="radio" id="female" name="gender" value="female"></input>
                                <label htmlFor="female">Nữ</label>
                            <input type="radio" id="other" name="gender" value="other"></input>
                                <label htmlFor="other">Khác</label>
                        </div>
                </div>
                <div className="wrap-items-input-register birthday">
                    <label>Ngày sinh</label>
                    <div className="birthday-items">
                        <select name="days" id="days">
                            <option value="none" selected disabled hidden>Ngày</option> 
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                        <select name="months" id="months">
                            <option value="none" selected disabled hidden>Tháng</option> 
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                        <select name="years" id="years">
                            <option value="none" selected disabled hidden>Năm</option> 
                            <option value="2000">2000</option>
                            <option value="2001">2001</option>
                            <option value="2002">2002</option>
                            <option value="2003">2003</option>
                            <option value="2004">2004</option>
                            <option value="2005">2005</option>
                            <option value="2006">2006</option>
                            <option value="2007">2007</option>
                            <option value="2008">2008</option>
                            <option value="2009">2009</option>
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                        </select>
                    </div>
                </div>
                <div className="wrap-items-input-register get-discount">
                    <input type="checkbox" name="get_discount"></input>
                    <label>Nhận các thông tin và chương trình khuyến mãi của FanthBol qua email.</label>
                </div>
                <div className="wrap-items-input-register create-account">
                    <button type="submit">Tạo tài khoản</button>
                </div>
                <div className="wrap-items-input-register policy-service">
                    <p>Khi bạn nhấn Đăng ký, bạn đã đồng ý thực hiện mọi giao dịch mua bán theo<a href="/"> điều kiện sử dụng và chính sách của FanthBol.</a></p>
                </div>
            </form>
    )
}

export default CreateNewAccount;