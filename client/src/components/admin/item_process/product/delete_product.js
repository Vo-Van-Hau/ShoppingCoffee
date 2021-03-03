const DeleteProductForm = () => {
    return (
        <div className="delete-product-process" id="delete-product-process">
            <div className="brand">
                <p>FanthBol</p>
            </div>
            <div className="wrap-item-form-search">
                <form action="" method="POST">
                    <input type="search" placeholder="Nhập tên hoặc ID của sản phẩm"></input>
                    <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
            <div className="delete-product-process-list">
                <form action="http://localhost:3000/admin/product/add" method="POST">

                    <div className="wrap-item-form">
                        <label htmlFor="">*Tên thực tế của sản phẩm</label>
                        <input type="text" placeholder="Tên sản phẩm" name="" id="" className=""></input>
                    </div>

                    <div className="wrap-item-form">
                        <label htmlFor="">*Giá bán thực tế của sản phẩm</label>
                        <input type="text" placeholder="Giá sản phẩm" name="" id="" className=""></input>
                    </div>

                    <div className="wrap-item-form">
                        <label htmlFor="">*Giá giảm thực tế của sản phẩm</label>
                        <input type="text" placeholder="Giá giảm của sản phẩm" name="" id="" className=""></input>
                    </div>

                    <div className="wrap-item-form">
                        <label htmlFor="">*Hình ảnh thực tế của sản phẩm</label>
                        <input type="text" placeholder="Link hình ảnh của sản phẩm" name="" id="" className=""></input>
                    </div>

                    <div className="wrap-item-form">
                        <label htmlFor="">*Mã của sản phẩm</label>
                        <select name="" id="">
                            <option value="none" defaultValue disabled hidden>Code</option> 
                            <option value="1001">1001</option>
                            <option value="1002">1002</option>
                            <option value="1003">1003</option>
                        </select>
                    </div>

                    <div className="wrap-item-form">
                        <button type="submit">Xóa sản phẩm</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default DeleteProductForm;