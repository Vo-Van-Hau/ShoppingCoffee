import React from 'react';

// custom components
import MoreInfor from './article';
import PayMethod from './paymethod';
import Follow from './follow';
import Discount from './discount';
import AboutUs from './aboutus';

export default function Footer(){
    return (
       <div id="wrap_footer_all">
           <div className="footer_items">
                <AboutUs />
           </div>
           <div className="footer_items">
                <MoreInfor />
            </div>
           <div className="footer_items">
                <PayMethod />
           </div>
           <div className="footer_items">
                <Follow />
           </div>
           <div className="footer_items">
                <Discount />
           </div>
           <div id="copyright">
                <p>Copyright © 2021 - Bản quyền của Công Ty FanthBol VietNam. All rights reserved.</p>
           </div>
       </div>
    ) 
}