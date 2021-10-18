import { firestore } from "../../firebase"

export const handleFetchPlans = () => {
    return new Promise((resolve, reject) => {
        firestore
            .collection("plans")
            .orderBy("planIndex")
            .get()
            .then(snapshot => {
                const data = [
                    ...snapshot.docs.map(doc => {
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

export const handleFetchPlan = ( planID ) => {
    return new Promise((resolve, reject) => {
        firestore
            .collection("plans")
            .doc(planID)
            .get()
            .then(snapshot=>{
                if (snapshot.exists) {
                    resolve(
                        {
                            ...snapshot.data(),
                            planID
                        }
                    )
                }
            })
            .catch(error => {
                reject(error)
            })
    })
}