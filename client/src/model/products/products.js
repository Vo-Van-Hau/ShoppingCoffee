import axios from 'axios';

const getProducts = (setProductList) => {
    axios.get('http://localhost:3001/api/product').then(
        (res) => {
            setProductList(res.data);
        }
    )
}

export default getProducts;