import plansTypes from "./plans.types";

const INITIAL_STATE = {
    plans: [],
    plan: [],
}

const plansReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case plansTypes.SET_PLANS:
            return {
                ...state,
                plans: action.payload
            }
        case plansTypes.SET_PLAN:
            return {
                ...state,
                plan: action.payload
            }
        default:
            return state
        }
}

export default plansReducer