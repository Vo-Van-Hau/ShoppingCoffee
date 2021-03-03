import React from 'react';

const ExplainProduct = ({ product_item }) => {
    return (
        <div className="explain-product">
            <div className="explain-product-item">
                <div className="title-explain">
                    {/* <h3>{ product_item.description.title }</h3> */}
                </div>
                <div className="context-explain">
                    <h6>Cà phê sữa Việt Nam được xếp vào một trong mười cách uống độc đáo trên thế giới.</h6>
                    <p>
                        {/* {product_item.description.description} */}
                    </p>
                    <h6>
                        Ngụm đầu tiên, vị ngọt thấm vào đầu lưỡi. Sau đó rút đi, để lại vị đắng thanh thoát.<br/>
                        Ngụm thứ hai, và bất chợt bạn cảm thấy mọi thứ trên đời này đều ổn cả.
                    </h6>
                </div>
            </div>
        </div>
    ) 
}

export default ExplainProduct;