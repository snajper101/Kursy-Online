import coursesTypes from "./courses.types";
import { takeLatest, put, all, call } from "redux-saga/effects"
import { handleVerifyCourseDraft, handleAddNewDraft } from "./courses.helpers";
import { setIsVerifiedCourse, setCreatorDraft } from "./courses.actions"

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
        const draft = yield handleAddNewDraft(payload)
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

export default function* coursesSagas() {
    yield all([
        call(onVerifyCourseDraftStart),
        call(onAddNewDraftStart)
    ])
}