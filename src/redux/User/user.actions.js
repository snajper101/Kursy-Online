import userTypes from "./user.types"
import { auth, handleUserProfile, GoogleProvider } from '../../firebase'

export const emailSignInStart = userCredentials => ({
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: userCredentials
})

export const signInSuccess = user => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user
})


export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
})

export const resetAllAuthForms = () => ({
    type: userTypes.RESET_AUTH_FORMS
})

export const signInUser = ({ email, password }) => async dispatch => {
    try {
        await auth.signInWithEmailAndPassword(email, password)
        dispatch({
            type: userTypes.SIGN_IN_SUCCESS,
            payload: true
        })
    } catch (error) {
        //console.log(error);
    }
}

export const signUpUser = ({ displayName, email, password, confirmPassword }) => async dispatch => {
    if (password !== confirmPassword){
        const error = ["Password does not  match"]
        dispatch({
            type: userTypes.SIGN_UP_ERROR,
            payload: error
        })
        return
    }

    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password)

        await handleUserProfile( user, { displayName } )
        dispatch({
            type: userTypes.SIGN_UP_SUCCESS,
            payload: true
        })
    } catch(error) {
        //console.log(error)
    }
}

export const signInWithGoogle = () => async dispatch => {
    try {
        await auth.signInWithPopup(GoogleProvider)
            .then(() => {
                dispatch({
                    type: userTypes.SIGN_IN_SUCCESS,
                    payload: true
                })
            })
    } catch(error) {
        //console.log(error)
    }
}