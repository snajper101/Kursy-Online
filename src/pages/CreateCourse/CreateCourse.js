import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { verifyCourseDraft, addNewDraft } from '../../redux/Courses/courses.actions';

//Styled Components
import {} from "./CreateCourseComponents";

//Components

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    creatorDraft: state.courses.creatorDraft,
    draftVerified: state.courses.draftVerified,
})

const Create = () => {
    const { courseID } = useParams()
    const dispatch = useDispatch()
    const { currentUser, creatorDraft, draftVerified } = useSelector(mapState)
    const history = useHistory()

    const DEFAULT_DRAFT = ({
        name: "",
        creator: currentUser.id,
    })

    useEffect(() => {
        if (courseID == "new") {
            dispatch(
                addNewDraft(DEFAULT_DRAFT)
            )
        } else {
            dispatch(
                verifyCourseDraft(courseID)
            )
        }
    }, [])

    useEffect(() => {
    }, [draftVerified])

    useEffect(() => {
        if (creatorDraft && courseID == "new") {
            history.push("/" + creatorDraft.documentID)
        }
    }, [creatorDraft])

    return (
        <>
          <h1>SEX</h1>  
        </>
    )
}

export default Create
