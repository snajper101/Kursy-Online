import { firestore } from "../../firebase";

export const handleAddProduct = product => {
    return new Promise((resolve, reject) => {
        firestore
            .collection("products")
            .doc()
            .set(product)
            .then(() => {
                resolve()
            }) 
            .catch(erorr => {
                reject(erorr)
            })
    })
}

export const handleFetchProducts = ( { filterType, startAfterDoc, persistProducts=[] }) => {
    return new Promise((resolve, reject) => {
        const pageSize = 12

        let ref = firestore.collection("products").limit(pageSize)
        if (startAfterDoc) ref = ref.startAfter(startAfterDoc)

        ref
        .get()
        .then(snapshot => {
            const totalCount = snapshot.size

            const data = [
                ...persistProducts,
                ...snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                })
            ]
            resolve({
                data,
                queryDoc: snapshot.docs[totalCount - 1],
                isLastPage: totalCount < 1 || totalCount < pageSize,
            })
        })
        .catch(error => {
            reject(error)
        })
    })
}

export const handleDeleteProduct = documentID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection("products")
            .doc(documentID)
            .delete()
            .then(() => {
                resolve()
            })
            .catch(error => {
                reject(error)
            })
    })
}

export const handleFetchProduct = ( productID ) => {
    return new Promise((resolve, reject) => {
        firestore
            .collection("products")
            .doc(productID)
            .get()
            .then(snapshot => {
                if (snapshot.exists) {
                    resolve(
                        snapshot.data()
                    )
                }
            })
            .catch(error =>{
                reject(error)
            })
    })
}