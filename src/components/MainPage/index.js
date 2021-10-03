import React, {useState} from 'react'
import Navbar from '../../components/Navbar'

const MainPage = props => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/*<Sidebar isOpen={isOpen} toggle={toggle}/>*/}
            <Navbar {...props}/>
        </>
    )
}

export default MainPage