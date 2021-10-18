import axios from "axios"

export const checkUserIsAdmin = currentUser => {
    if (!currentUser || !Array.isArray(currentUser.roles)) return false
    const { roles } = currentUser
    if (roles.includes("admin")) return true
    
    return false
}

export const checkUserIsCreator = currentUser => {
    if (!currentUser || !currentUser.isCreator ) return false 
    if (currentUser.isCreator) return true

    return false
}

export const apiInstance = axios.create({
    baseURL:  "https://us-central1-kursy-online-e1f8f.cloudfunctions.net/api" //"http://localhost:5001/kursy-online-e1f8f/us-central1/api"
})