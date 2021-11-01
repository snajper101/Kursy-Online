import coursesTypes from "./courses.types"

const INITIAL_STATE = {
    creatorCourses: [],
    creatorDrafts: [],
    creatorDraft: [],
    draftVerified: [],
}

const coursesReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case coursesTypes.SET_IS_COURSE_VERIFIED: 
            return {
                ...state,
                draftVerified: action.payload
            }
        case coursesTypes.SET_CREATOR_DRAFT: 
            return {
                ...state,
                creatorDraft: action.payload
            }
        default:
            return state;
    }
}

export default coursesReducer