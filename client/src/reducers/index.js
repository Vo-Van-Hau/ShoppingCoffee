import { combineReducers } from 'redux';

// Reducers child
import cart from './cart';

const allReducers = combineReducers({
    cart,
})

export default allReducers;