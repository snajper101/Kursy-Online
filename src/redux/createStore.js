import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()
export const middlewares = [thunk, sagaMiddleware, logger]

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares),
))
sagaMiddleware.run(rootSaga)

export default store