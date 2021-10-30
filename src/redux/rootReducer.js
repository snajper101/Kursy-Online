import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storageSession  from "redux-persist/lib/storage/session"

import userReducer from "./User/user.reducer"
import productsReducer from "./Products/products.reducer"
import cartReducer from "./Cart/cart.reducer"
import ordersReducer from "./Orders/orders.reducer"
import plansReducer from "./Plans/plans.reducer"
import coursesReducer from "./Courses/courses.reducer"

export const rootReducer = combineReducers({
    user: userReducer,
    productsData: productsReducer,
    cartData: cartReducer,
    ordersData: ordersReducer,
    plansData: plansReducer,
    courses: coursesReducer,
})

const configStorage = {
    key: "root",
    storage: storageSession,
    whitelist: ["user", "cartData"]
}

export default persistReducer(configStorage, rootReducer)