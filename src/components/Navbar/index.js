import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { NavBar, TestItem, LogoSection, AccountSection, NavigationSection, AccountButton, AccountButtonText, AccountImageButtons, AccountButtonIcon, ButtonSvg, AccountButtonIconLink, AccountDropdown, AccountDropdownItem, AccountDropdownIconButton, AccountDropdownIconRight, NavigationItem } from './NavbarElements';
import { ReactComponent as PlusIcon } from '../../images/plus.svg'
import { ReactComponent as CaretIcon } from '../../images/caret.svg'
import { ReactComponent as CogIcon } from '../../images/cog.svg'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const Navbar = props => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const { currentUser } = useSelector(mapState)
    const location = useLocation()

    return (
        <NavBar>
            <LogoSection>
                <TestItem >Logo</TestItem>
            </LogoSection>
            <NavigationSection>
                <NavigationItem to="/discover">Discover</NavigationItem>
                <NavigationItem to="/courses">Start watching</NavigationItem>
            </NavigationSection>
            { currentUser && 
                <AccountSection>
                    { location.pathname === "/discover" && 
                        <AccountButton to="/checkout">
                            <AccountButtonText>Basket</AccountButtonText>
                        </AccountButton>
                    }
                    <AccountButton to="/dashboard">
                        <AccountButtonText>Profile</AccountButtonText>
                    </AccountButton>
                    <AccountImageButtons>
                        <AccountButtonIconLink to="/create">
                            <ButtonSvg>{<PlusIcon />}</ButtonSvg>
                        </AccountButtonIconLink>
                        {/*Dropdown*/}
                        <AccountButtonIcon onClick={() => setDropdownOpen(!dropdownOpen)}>
                            <ButtonSvg>{<CaretIcon />}</ButtonSvg>
                        </AccountButtonIcon>
                        { dropdownOpen && 
                            <AccountDropdown>
                                <AccountDropdownItem to="/dashboard">My Profile</AccountDropdownItem>
                                <AccountDropdownItem to="/classroom">My classroom</AccountDropdownItem>
                                <AccountDropdownItem to="/create">Create{<AccountDropdownIconRight>{<CogIcon />}</AccountDropdownIconRight>}</AccountDropdownItem>
                            </AccountDropdown>
                        }
                    </AccountImageButtons>
                </AccountSection>
            }
            { !currentUser && 
                <AccountSection>
                    <AccountButton to="/signin">
                        <AccountButtonText>Sign in</AccountButtonText>
                    </AccountButton>
                </AccountSection>
            }
        </NavBar>
    );
}

Navbar.defaultProps = {
    currentUser: null
}

export default Navbar
