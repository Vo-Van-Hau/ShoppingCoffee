import React from 'react';

const ImageSymbolic = ({ product_item }) => {
    return (
        <div className="image-symbolic">
            <img src={product_item.img} alt=""></img>
        </div>
    ) 
}

export default ImageSymbolic;