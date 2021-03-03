import axios from 'axios';

const getProducts = (setProductList) => {
    axios.get('http://localhost:3001/data/admin/products/up-date').then(
        (res) => {
            setProductList(res.data);
        }
    )
}

export default getProducts;