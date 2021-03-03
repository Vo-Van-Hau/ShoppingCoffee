import axios from 'axios';

const getProductSearch = (setProductListSearch) => {
    
    axios.get('http://localhost:3001/search/products').then(
        (res) => {
                setProductListSearch(res.data);
            }
    )
}

export default getProductSearch;
