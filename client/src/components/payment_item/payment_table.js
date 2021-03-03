// Style App
import '../../style/handle_account_form/handle_account_form.css';

const PaymentTable = ({ cart }) => {

    let totalPayment = 0;
    let totalProductQuantity = cart.length;

    for(let i = 0; i < cart.length; i++){
        totalPayment += (cart[i].product.price*cart[i].quantity);
    }

    return(
        <div id="payment-table">
            <div id="discount-code">
                <div id="usecode">
                    <i className="fas fa-tags"></i>
                    <span>Sử dụng mã giảm giá</span>
                </div>
            </div>
            <div id="discount-code-active">
                <form action="" method="POST">
                    <input placeholder="Nhập mã giảm giá" type="text"></input>
                    <button type="submit">Áp dụng</button>
                </form>
            </div>
            <div id="provisional-total">
                <span>Tạm tính ({totalProductQuantity} sản phẩm):</span>
                <span id="provisional-total-number">{totalPayment} <sup>đ</sup></span>
            </div>
            <div id="total-money">
                <strong>Tổng tiền:</strong>
                <strong id="total-money-number">{totalPayment} ₫</strong>
            </div>
            <div id="vat-alert">
                <i>(Đã bao gồm VAT nếu có)</i>
            </div>
            <div id="btn-start-order">
                <a href="/login">Tiến hành đặt hàng</a>
                <span>Bằng cách đặt hàng, bạn đồng ý với Điều khoản sử dụng của FanthBol-Coffee</span>
            </div>
        </div>
    )  
}

export default PaymentTable;