import plansTypes from "./plans.types";
import { takeLatest, put, all, call } from "redux-saga/effects"
import { handleFetchPlans, handleFetchPlan } from "./plans.helpers" 
import { setPlans, setPlan } from "./plans.actions"

export function* fetchPlans( { payload } ) {
    try {
        const plans = yield handleFetchPlans(payload)
        yield put(
            setPlans(plans)
        )
    } catch (error) {
        // console.log(error);
    }
}

export function* onFetchPlansStart() {
    yield takeLatest(plansTypes.FETCH_PLANS_START, fetchPlans)
}

export function* fetchPlan( { payload } ) {
    try {
        const plan = yield handleFetchPlan(payload)
        yield put(
            setPlan(plan)
        )
    } catch (error) {
        // console.log(error);
    }
}

export function* onFetchPlanStart() {
    yield takeLatest(plansTypes.FETCH_PLAN_START, fetchPlan)
}

export default function* plansSaga() {
    yield all([
        call(onFetchPlansStart),
        call(onFetchPlanStart),
    ])
}