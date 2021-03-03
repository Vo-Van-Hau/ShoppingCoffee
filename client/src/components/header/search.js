import React from 'react';

const Search = () => {

    return (
        <div id="search">
            <form action="http://localhost:3001/search/products" method="POST">
                <input placeholder="Tìm kiếm trên FanthBol-Coffee" type="search" name="product_search"></input>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        </div>
    ) 
}
export default Search; 