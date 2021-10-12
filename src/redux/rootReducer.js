import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storageSession  from "redux-persist/lib/storage/session"

import userReducer from "./User/user.reducer"
import productsReducer from "./Products/products.reducer"
import cartReducer from "./Cart/cart.reducer"

export const rootReducer = combineReducers({
    user: userReducer,
    productsData: productsReducer,
    cartData: cartReducer,
})

const configStorage = {
    key: "root",
    storage: storageSession,
    whitelist: ["cartData"]
}

export default persistReducer(configStorage, rootReducer)