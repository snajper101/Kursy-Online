import { takeLatest, call, all, put } from "@redux-saga/core/effects";
import { auth, handleUserProfile, getCurrentUser, GoogleProvider } from '../../firebase'
import userTypes from "./user.types";
import { signInSuccess, signOutUserSuccess, userError } from "./user.actions";

export function* getSnapshotFromUserAuth(user, additionalData={}) {
    try {
        const userRef = yield call(handleUserProfile, { userAuth: user, additionalData } )
        const snapshot = yield userRef.get()
        yield put(
            signInSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
        )
    } catch(error) {
        // console.log(error)
    }
}

export function* emailSignIn({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        //console.log(error);
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) return
        yield getSnapshotFromUserAuth(userAuth)
    } catch (error) {
        // console.log(error);
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOutUser() {
    try {
        yield auth.signOut()
        yield put(
            signOutUserSuccess()
        )
    } catch (error) {
        // console.log(error);
    }
}

export function* onSignOutUserStart() {
    yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser)
}

export function* signUpUser( {payload: {
    displayName, 
    email,
    password,
    confirmPassword
}}) {
    if (password !== confirmPassword){
        const error = ["Password does not match"]
        yield put(
            userError(error)
        )
        return
    }

    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        const additionalData = { displayName }
        yield getSnapshotFromUserAuth(user, additionalData)
        //yield call(handleUserProfile, { userAuth: user, additionalData: { displayName } } )
    } catch(error) {
        //console.log(error)
    }
}

export function* onSignUpUserStart() {
    yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser)
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(GoogleProvider)
        yield getSnapshotFromUserAuth(user)
    } catch(error) {
        //console.log(error)
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export default function* userSagas() {
    yield all([
        call(onEmailSignInStart), 
        call(onCheckUserSession), 
        call(onSignOutUserStart),
        call(onSignUpUserStart),
        call(onGoogleSignInStart)
    ])
}