import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { NavBar, TestItem, LogoSection, AccountSection, NavigationSection, AccountButton, AccountButtonText, AccountImageButtons, AccountButtonIcon, ButtonSvg, ButtonImg, AccountButtonIconLink, AccountDropdown, AccountDropdownItem, AccountDropdownIconButton, AccountDropdownIconRight, NavigationItem } from './NavbarElements';
import { ReactComponent as PlusIcon } from '../../images/plus.svg'
import { ReactComponent as CaretIcon } from '../../images/caret.svg'
import { ReactComponent as CogIcon } from '../../images/cog.svg'
import { ReactComponent as CartIcon } from '../../images/cart.svg'
import { selectCartItemsCount } from '../../redux/Cart/cart.selector';

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
})

const Navbar = props => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const { currentUser, totalNumCartItems } = useSelector(mapState)
    const location = useLocation()
    const buttonsDisappeared = useMediaQuery({ query: "(max-width: 736px)" });

    return (
        <NavBar>
            <LogoSection>
                <TestItem>Logo</TestItem>
            </LogoSection>
            <NavigationSection>
                <NavigationItem to="/discover">Discover</NavigationItem>
                <NavigationItem to="/courses">Start watching</NavigationItem>
            </NavigationSection>
            { currentUser && 
                <AccountSection>
                    { ( location.pathname === "/discover" || location.pathname === "/cart" || location.pathname.includes("/product") ) && 
                        <AccountButton to="/cart">
                            <AccountButtonText>Basket {totalNumCartItems > 0 ? `(${totalNumCartItems})` : ""}</AccountButtonText>
                        </AccountButton>
                    }
                    <AccountButton to="/dashboard">
                        <AccountButtonText>Profile</AccountButtonText>
                    </AccountButton>
                    <AccountImageButtons>
                        { buttonsDisappeared && 
                            <AccountButtonIconLink to="/cart">
                                <ButtonSvg>{<CartIcon/>}</ButtonSvg>
                            </AccountButtonIconLink>
                        }
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
