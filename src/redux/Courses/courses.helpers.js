import { firestore } from "../../firebase"

export const handleVerifyCourseDraft = courseID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection("courses")
            .doc(courseID)
            .get()
            .then(snapshot => {
                resolve(
                    snapshot.exists
                )
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const handleAddNewDraft = draft => {
    return new Promise((resolve, reject) => {
        firestore
            .collection("courses")
            .doc()
            .set(draft)
            .then((snapshot) => {
                resolve(snapshot)
            }) 
            .catch(erorr => {
                reject(erorr)
            })
    })
}