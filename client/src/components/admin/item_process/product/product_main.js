import AddProductForm from './add_product';
import UpdateProductForm from './update_product';
import DeleteProductForm from './delete_product';

const ProductProcess = () => {

    return (
        <div className="product-process">
            <AddProductForm />
            <UpdateProductForm />
            <DeleteProductForm />
        </div>
    )
}

export default ProductProcess;