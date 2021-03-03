import React from 'react';

export default function Discount(){
    return (
       <div id="get_discount_email">
           <span>ĐĂNG KÝ NHẬN THÔNG TIN KHUYẾN MÃI</span>
           <form action="" method="POST">
               <input placeholder="Nhập địa chỉ email của bạn" type="email"></input>
               <button type="submit">Đăng ký</button>
           </form>
       </div>
    ) 
}