import React from 'react';

// image 
import visa from '../../img/visa.svg';
import mastercard from '../../img/mastercard.svg';
import jcb from '../../img/jcb.svg';
import cash from '../../img/cash.svg';
import internetbanking from '../../img/internet-banking.svg';
import installment from '../../img/installment.svg';

export default function PayMethod(){
    return (
       <div id="payment_methods">
           <span>PHƯƠNG THỨC THANH TOÁN</span>
           <div id="payment_method_items">
               <img src={visa} alt="visa"></img>
               <img src={mastercard} alt=""></img>
               <img src={jcb} alt=""></img><br/>
               <img src={cash} alt=""></img>
               <img src={internetbanking} alt=""></img>
               <img src={installment} alt=""></img>
           </div>
       </div>
    ) 
}