import React from 'react';

// image 
import fb from '../../img/fb.svg';
import youtube from '../../img/youtube.svg';
import playstore from '../../img/playstore.png';
import appstore from '../../img/appstore.png';

export default function Follow(){
    return (
       <div id="follow">
           <div id="connect_with_us">
                <span>KẾT NỐI VỚI CHÚNG TÔI</span>
                <div className="follow_items">
                    <a href="/"><img src={fb} alt="facebook"></img></a>
                    <a href="/"><img src={youtube} alt="youtube"></img></a>
                </div>
           </div>
           <div id="install_app">
               <span>TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</span>
               <div className="follow_items">
                   <a href="/"><img src={playstore} alt="playstore"></img></a>
                   <a href="/"><img src={appstore} alt="appstore"></img></a>
               </div>
           </div>
       </div>   
    ) 
}