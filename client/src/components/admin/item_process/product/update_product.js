import { useState } from 'react';

// API Model
import getProducts from '../../../../model/admin/product/product_list_search';

const UpdateProductForm = () => {

    let [productList, setProductList] = useState([]); // productList is [ item. "block", id ]
    let [updateProduct, setUpdateProduct] = useState({
                id: "",
                name: "",
                slug: "",
                img: "",
                price: "0",
                discount: "0",
                code_products: "0000"
            });
    // let statuForm;
    // let [onChangeProductList, setOnChangeProductList] = useState({})
    //     {
    //         id: "",
    //         name: "",
    //         slug: "",
    //         img: "",
    //         price: "0",
    //         discount: "0",
    //         code_products: "0000"
    //     }
    // ); 

    getProducts(setProductList);


    const searchProductList = productList.filter((item) => {
                if(item === null){
                    return
                }
                if(item.id === parseInt(productList[productList.length - 1])){
                    return item;
                }
            })

    // if(searchProductList.length === 0){
    //     setUpdateProduct({
    //         id: "",
    //         name: "",
    //         slug: "",
    //         img: "",
    //         price: "0",
    //         discount: "0",
    //         code_products: "0000"
    //     })
    // }else if(searchProductList.length === 1){
    //     setUpdateProduct(searchProductList[0]);
    // }

            // console.log(searchProductList)

    const onChange = (event) => { // e.target is html tag which you is interacting
        let name = event.target.name; // this is the name of input and select
        let value = event.target.value; // this is the value of input and select
    }       
    return (
        <div className="update-product-process" id="update-product-process" style={ { display: productList[productList.length - 2] } }>
            <div className="brand">
                <p>FanthBol</p>
            </div>
            <div className="wrap-item-form-search">
                <form action="http://localhost:3001/data/admin/products/up-date" method="POST">
                    <input  type="search" 
                            placeholder="Nhập tên hoặc ID của sản phẩm" 
                            id="" name="searchID" 
                            // value={ productList.length > 2 ? productList[productList.length - 1] : "" }
                    >
                    </input>
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
            {/* style={ { display: statuForm } } */}
            <div className="update-product-process-list">
                <form action="http://localhost:3001/data/admin/products/up-date" method="PUT">

                    <div className="wrap-item-form">
                        <label htmlFor="nameOfUpdate">*Tên thực tế của sản phẩm</label>
                        <input  type="text" 
                                placeholder="Tên sản phẩm" 
                                name="nameOfUpdate" 
                                id="nameOfUpdate" 
                                className="" 
                                value={ updateProduct.name }
                                onChange={ (e) => onChange(e)}
                        >    
                        </input>
                    </div>

                    {/* <div className="wrap-item-form">
                        <label htmlFor="salePriceOfUpdate">*Giá bán thực tế của sản phẩm</label>
                        <input  type="text" 
                                placeholder="Giá sản phẩm" 
                                name="salePriceOfUpdate" 
                                id="salePriceOfUpdate" 
                                className="" 
                                // value={ productList.length > 2 ? productList[productList.length - 3].price : salePriceOfUpdate }
                                onChange={ (e) => onChange(e)}
                        >
                        </input>
                    </div>

                    <div className="wrap-item-form">
                        <label htmlFor="discountOfUpdate">*Giá giảm thực tế của sản phẩm</label>
                        <input  type="text" 
                                placeholder="Giá giảm của sản phẩm" 
                                name="discountOfUpdate" 
                                id="discountOfUpdate" 
                                className="" 
                                // value={ productList.length > 2 ? productList[productList.length - 3].discount : discountOfUpdate } 
                                onChange={ (e) => onChange(e)}
                        >
                        </input>
                    </div>

                    <div className="wrap-item-form">
                        <label htmlFor="linkImgOfUpdate">*Hình ảnh thực tế của sản phẩm</label>
                        <input type="text" 
                                placeholder="Link hình ảnh của sản phẩm" 
                                name="linkImgOfUpdate" 
                                id="linkImgOfUpdate" 
                                className="" 
                                // value={ productList.length > 2 ? productList[productList.length - 3].img : linkImgOfUpdate } 
                                onChange={ (e) => onChange(e)}
                        ></input>
                    </div>

                    <div className="wrap-item-form">
                        <label htmlFor="CodeOfUpdate">*Mã của sản phẩm</label>
                        <select name="CodeOfUpdate" 
                                id="CodeOfUpdate" 
                                // value={ productList.length > 2 ? productList[productList.length - 3].code_products : codeOfUpdate } 
                                onChange={ (e) => onChange(e)}
                        >
                            <option value="none" defaultValue disabled hidden>Code</option> 
                            <option value="1001">1001</option>
                            <option value="1002">1002</option>
                            <option value="1003">1003</option>
                        </select>
                    </div>

                    <div className="wrap-item-form">
                        <button type="submit">Cập nhật sản phẩm</button>
                    </div> */}

                </form>
            </div>
        </div>
    )
}

export default UpdateProductForm;