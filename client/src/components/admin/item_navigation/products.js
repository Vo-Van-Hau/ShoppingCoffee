const NaviProduct = () => {

    const changeStatusProductFunc = (statusCode) => { // 1: add, 2: update, 3: delete

        const addFunc = document.getElementById("add-product-process");
        const updateFunc = document.getElementById("update-product-process");
        const deleteFunc = document.getElementById("delete-product-process");
        
        switch(statusCode){
            case 1: 
                addFunc.style.display = "block";
                updateFunc.style.display = "none";
                deleteFunc.style.display = "none";
                break;
            case 2: 
                addFunc.style.display = "none";
                updateFunc.style.display = "block";
                deleteFunc.style.display = "none";
            break;
            case 3: 
                addFunc.style.display = "none";
                updateFunc.style.display = "none";
                deleteFunc.style.display = "block";
            break;
        }
    }

    return (
        <ul>
            <li>
                <button type="button" onClick={ () => changeStatusProductFunc(1) }><i className="fas fa-plus"></i>Add Products</button>
            </li>
            <li>
                <button type="button" onClick={ () => changeStatusProductFunc(2) }><i className="fas fa-wrench" onClick={ () => changeStatusProductFunc(2) }></i>Update Products</button>
            </li>
            <li>
                <button type="button" onClick={ () => changeStatusProductFunc(3) }><i className="far fa-trash-alt" onClick={ () => changeStatusProductFunc(3) }></i>Delete Products</button>
            </li>
        </ul>
    )

}

export default NaviProduct;