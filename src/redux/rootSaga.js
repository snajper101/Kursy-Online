import { all, call } from "redux-saga/effects"

import userSagas from "./User/user.sagas"
import productsSagas from "./Products/products.sagas"
import ordersSagas from "./Orders/orders.sagas"
import plansSaga from "./Plans/plans.sagas"
import coursesSagas from "./Courses/courses.sagas"

export default function* rootSaga() {
    yield all([
        call(userSagas), 
        call(productsSagas),
        call(ordersSagas),
        call(plansSaga),
        call(coursesSagas)
    ])
}