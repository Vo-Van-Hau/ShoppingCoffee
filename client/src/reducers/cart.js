import * as types from '../constants/ActionTypes';

const initialState = [];

const cart = (state = initialState, action) => {

    switch(action.type){

        case types.ADD_TO_CART:
            const index = findIndex(state, action.product);
            if(index !== -1){
                state[index].quantity += action.quantity;
            }else{
                state.push(
                    {   
                        product: action.product,
                        quantity: action.quantity
                    }
                );
            }
            return [...state];
            
        case types.DELETE_ITEM_IN_CART:
            const index_delete_item_in_cart = findIndex(state, action.product);
            state.splice(index_delete_item_in_cart, 1);
            return [...state];
        
        case types.UPDATE_PRODUCT_ITEM_QUANTITY_IN_CART:
            const index_add_to_cart = findIndex(state, action.product);
            state[index_add_to_cart].quantity = action.quantity;
            return [...state];

        default: return [...state];
    }
    
}

const findIndex = (state, product) => {
    let index = -1;
    for(let i = 0; i < state.length; i++){
        if(state[i].product.id === product.id){
            index = i;
        }
    }
    return index;
}

export default cart;