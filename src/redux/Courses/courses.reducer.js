import coursesTypes from "./courses.types"

const INITIAL_STATE = {
    creatorCourses: [],
}

const coursesReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default coursesReducer