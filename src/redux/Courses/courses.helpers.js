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
            .add(draft)
            .then(snapshot => {
                resolve(
                    snapshot.id)
            }) 
            .catch(error => {
                reject(error)
            })
    })
}

export const handleFetchDraft = documentID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection("courses")
            .doc(documentID)
            .get()
            .then(snapshot => {
                resolve({
                    ...snapshot.data(),
                    documentID
                })
            })
            .catch(error => [
                reject(error)
            ])
    })
}

export const handleFetchCreatorCourses = creatorID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection("courses")
            .where("creator", "==", creatorID)
            .get()
            .then(snapshot => {
                const data = [
                    ...snapshot.docs.map(doc=>{
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    })
                ]
                resolve(data)
            }) 
            .catch(error => {
                reject(error)
            })
    })
}

export const handleDeleteDraft = draftID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection("courses")
            .doc(draftID)
            .delete()
    })
}