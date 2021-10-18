import plansTypes from "./plans.types";

export const setPlans = plans => ({
    type: plansTypes.SET_PLANS,
    payload: plans
})

export const setPlan = plan => ({
    type: plansTypes.SET_PLAN,
    payload: plan
})

export const fetchPlansStart = plan => ({
    type: plansTypes.FETCH_PLANS_START,
})

export const fetchPlanStart = planID => ({
    type: plansTypes.FETCH_PLAN_START,
    payload: planID
})