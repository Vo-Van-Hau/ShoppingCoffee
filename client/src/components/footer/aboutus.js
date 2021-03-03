import React from 'react';

// img
import certificatebusiness from '../../img/certificatebusiness.png';
import certificatefakeproduct from '../../img/certificatefakeproduct.png';

export default function AboutUs(){
    return (
       <div id="about">
           <span><b>FanthBol-Coffee: </b>NỀN TẢNG MUA SẮM TRỰC TUYẾN ĐỒ ĂN NHANH, NƯỚC UỐNG HÀNG ĐẦU VIỆT NAM</span>
           <p>Cơ quan cấp: Sở Kế hoạch và Đầu tư tỉnh Đồng Tháp.</p>
           <p>Địa chỉ văn phòng: Ấp 2A, xã Hưng Thạnh, huyện Tháp Mười, tỉnh Đồng Tháp, Việt Nam.</p>
           <p>Email: coffee@fanthbol.com</p>
           <p>Delivery: 1800 6936 (07:00-21:00)</p>
           <p>Support: 0359744542 (07:00-21:00)</p>
           <div id="certificate">
                <img src={certificatebusiness} alt="Chứng chỉ kinh doanh"></img>
                <img src={certificatefakeproduct} alt="Chứng chỉ chóng hàng giả" style={{width: "40px", height: "40px", padding: "0 5px"}}></img>
           </div>
       </div>   
    ) 
}