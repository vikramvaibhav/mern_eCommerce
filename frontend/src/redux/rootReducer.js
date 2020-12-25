import { combineReducers } from 'redux'
import { productListReducer, productDetailsReducer } from './product/productReducers'
import { cartReducer } from './cart/cartReducers'
const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})

export default rootReducer