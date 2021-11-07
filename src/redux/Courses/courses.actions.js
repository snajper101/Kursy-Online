import coursesTypes from "./courses.types";

export const verifyCourseDraft = courseID => ({
    type: coursesTypes.VERIFY_COURSE_DRAFT_START,
    payload: courseID
})

export const setIsVerifiedCourse = verified => ({
    type: coursesTypes.SET_IS_COURSE_VERIFIED,
    payload: verified
})

export const addNewDraft = course => ({
    type: coursesTypes.ADD_NEW_DRAFT_START,
    payload: course
})

export const setCreatorDraft = draft => ({
    type: coursesTypes.SET_CREATOR_DRAFT,
    payload: draft 
})

export const getCreatorCourses = creator => ({
    type: coursesTypes.GET_CREATOR_DRAFTS_START,
    payload: creator
})

export const setCreatorCourses = courses => ({
    type: coursesTypes.SET_CREATOR_COURSES,
    payload: courses
})