import { combineReducers } from 'redux'
import { productListReducer } from './product/productReducers'
const rootReducer = combineReducers({
    productList: productListReducer,
})

export default rootReducer