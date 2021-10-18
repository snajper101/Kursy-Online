import React from 'react'
import { NavBar, LogoSection, Logo } from '../Navbar/NavbarElements'

const ClearNavbar = () => {
    return (
        <NavBar>
            <LogoSection>
                <Logo to="/"/>
            </LogoSection>
        </NavBar>
    )
}


export default ClearNavbar
