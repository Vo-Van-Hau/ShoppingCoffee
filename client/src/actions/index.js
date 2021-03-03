import * as types from '../constants/ActionTypes';

export const onAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product, 
        quantity
    }
}

export const deleteProductItem = (product) => {
    return {
        type: types.DELETE_ITEM_IN_CART,
        product
    }
}

export const updateProductItemQuantity = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_ITEM_QUANTITY_IN_CART,
        product, 
        quantity
    }
}
