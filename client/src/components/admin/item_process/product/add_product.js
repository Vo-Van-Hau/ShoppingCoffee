const AddProductForm = () => {

    return (
        <div className="add-product-process" id="add-product-process">
            <form action="http://localhost:3001/data/admin/products/a-d-d" method="POST">

                <div className="wrap-item-form">
                    <label htmlFor="nameOfProduct">*Tên thực tế của sản phẩm</label>
                    <input type="text" placeholder="Tên sản phẩm" name="nameOfProduct" id="nameOfProduct" className=""></input>
                </div>

                <div className="wrap-item-form">
                    <label htmlFor="salePriceOfProduct">*Giá bán thực tế của sản phẩm</label>
                    <input type="text" placeholder="Giá sản phẩm" name="salePriceOfProduct" id="salePriceOfProduct" className=""></input>
                </div>

                <div className="wrap-item-form">
                    <label htmlFor="discountPriceOfProduct">*Giá giảm thực tế của sản phẩm</label>
                    <input type="text" placeholder="Giá giảm của sản phẩm" name="discountPriceOfProduct" id="discountPriceOfProduct" className=""></input>
                </div>

                <div className="wrap-item-form">
                    <label htmlFor="linkImgOfProduct">*Hình ảnh thực tế của sản phẩm</label>
                    <input type="text" placeholder="Link hình ảnh của sản phẩm" name="linkImgOfProduct" id="linkImgOfProduct" className=""></input>
                </div>

                <div className="wrap-item-form">
                    <label htmlFor="CodeOfProduct">*Mã của sản phẩm</label>
                    <select name="CodeOfProduct" id="CodeOfProduct">
                        <option value="none" defaultValue disabled hidden>Code</option> 
                        <option value="1001">1001</option>
                        <option value="1002">1002</option>
                        <option value="1003">1003</option>
                    </select>
                </div>

                <div className="wrap-item-form">
                    <button type="submit">Thêm sản phẩm</button>
                </div>
                
            </form>
        </div>
    )
}

export default AddProductForm;