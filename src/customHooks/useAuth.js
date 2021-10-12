import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const useAuth = props => {
    const { currentUser } = useSelector(mapState)
    const history = useHistory()
    
    useEffect(() => {
        if (!currentUser) {
            history.push("/signin")
        }
    }, [currentUser]) //Whenever currentUser changes code inside will run

    return currentUser
}

export default useAuth