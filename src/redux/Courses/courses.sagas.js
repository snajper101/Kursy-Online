import coursesTypes from "./courses.types";
import { takeLatest, put, all, call } from "redux-saga/effects"
import { handleVerifyCourseDraft, handleAddNewDraft, handleFetchDraft, handleFetchCreatorCourses } from "./courses.helpers";
import { setIsVerifiedCourse, setCreatorDraft, setCreatorCourses } from "./courses.actions"

export function* verifyCourseDraft({payload}) {
    try {
        const isVerified = yield handleVerifyCourseDraft(payload)
        yield put(
            setIsVerifiedCourse(isVerified)
        )
    } catch (error) {
        // console.log(error);
    }
}

export function* onVerifyCourseDraftStart() {
    yield takeLatest(coursesTypes.VERIFY_COURSE_DRAFT_START, verifyCourseDraft)
}

export function* addNewDraft({payload}) {
    try {
        const draftID = yield handleAddNewDraft(payload)
        const draft = yield handleFetchDraft(draftID)
        yield put(
            setCreatorDraft(draft)
        )
    } catch(error) {
        // console.log(error);
    }
}

export function* onAddNewDraftStart() {
    yield takeLatest(coursesTypes.ADD_NEW_DRAFT_START, addNewDraft)
}

export function* deleteNewDraft({payload}) {
    try {
        const creatorID, courseID = payload
        yield handleDeleteDraft(courseID)
        const courses = yield handleFetchCreatorCourses(creatorID)
        yield put(
            setCreatorCourses(courses)
        )
    } catch(erorr){
        // console.log(error);
    }
}

export function* onDeleteDraftStart() {
    yield takeLatest(coursesTypes.DELETE_DRAFT_START, deleteNewDraft)
}

export function* getCreatorCourses({payload}) {
    try {
        const courses = yield handleFetchCreatorCourses(payload)
        yield put(
            setCreatorCourses(courses)
        )
    } catch (error) {
        // console.log(error);
    }
}

export function* onGetCreatorCoursesStart() {
    yield takeLatest(coursesTypes.GET_CREATOR_DRAFTS_START, getCreatorCourses)
}

export default function* coursesSagas() {
    yield all([
        call(onVerifyCourseDraftStart),
        call(onAddNewDraftStart),
        call(onGetCreatorCoursesStart),
        call(onDeleteDraftStart)
    ])
}