import { auth } from "../../firebase"
import { takeLatest, put, all, call } from "redux-saga/effects"
import productsTypes from "./products.types"
import { setProducts, setProduct, fetchProductsStart } from "./products.actions"
import { handleAddProduct, handleFetchProducts, handleFetchProduct, handleDeleteProduct } from "./products.helpers"


export function* addProduct({ payload: {
    productName,
    productPrice,
    productRating,
}}) {
    try {
        const timestamp = new Date()
        yield handleAddProduct({
            name: productName,
            price: productPrice,
            creatorUID: auth.currentUser.uid,
            rating: productRating,
            createDate: timestamp
        })
        yield put(fetchProductsStart())
    } catch (error) {
        // console.log(error)
    }
}

export function* onAddProductStart() {
    yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct)
}

export function* fetchProducts( { payload } ) {
    try {
        const products = yield handleFetchProducts(payload)
        yield put(setProducts(products))
    } catch (error) {
        // console.log(error);
    }
}

export function* onFetchProductsStart() {
    yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts)
}

export function* deleteProduct( { payload } ) {
    try {
        yield handleDeleteProduct(payload)
        yield put(fetchProductsStart())
    } catch (error) {
        // console.log(error);
    }
}

export function* onDeleteProductsStart() {
    yield takeLatest(productsTypes.DELETE_PRODUCTS_START, deleteProduct)
}

export function* fetchProduct( { payload } ){
    try {
        const product = yield handleFetchProduct(payload)
        yield put(
            setProduct(product)
        )
    } catch (error) {
        // console.log(error);   
    }
}

export function* onFetchProductStart() {
    yield takeLatest(productsTypes.FETCH_PRODUCT_START, fetchProduct)
}

export default function* productsSagas() {
    yield all([
        call(onAddProductStart), 
        call(onFetchProductsStart),
        call(onDeleteProductsStart),
        call(onFetchProductStart),
    ])
}