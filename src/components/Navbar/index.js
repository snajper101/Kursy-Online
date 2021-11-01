import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { NavBar, Logo, SocialIcon, SocialSection, SearchBar, SearchInput, LogoSection, AccountSection, NavigationSection, AccountButton, AccountButtonText, AccountImageButtons, AccountButtonIcon, ButtonSvg, ButtonImg, AccountButtonIconLink, AccountDropdown, AccountDropdownItem, AccountDropdownIconButton, AccountDropdownIconRight, NavigationItem } from './NavbarElements';
import { ReactComponent as PlusIcon } from '../../images/plus.svg'
import { ReactComponent as CaretIcon } from '../../images/caret.svg'
import { ReactComponent as CogIcon } from '../../images/cog.svg'
import { ReactComponent as CartIcon } from '../../images/cart.svg'
import { selectCartItemsCount } from '../../redux/Cart/cart.selector';

const socialIcons = ({
    instagram: "https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2FinstagramIcon.svg?alt=media&token=dff7e84f-9e40-4f1a-a619-00380bdf9921",
    facebook: "https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2FfacebookIcon.svg?alt=media&token=db4f1fb1-8050-45b8-af86-f4831deee976",
    youtube: "https://firebasestorage.googleapis.com/v0/b/kursy-online-e1f8f.appspot.com/o/StaticResources%2FyoutubeIcon.svg?alt=media&token=db634892-2ec3-46c0-8656-426f3e043e84",
})

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
                <Logo to="/"></Logo>
                <SearchBar>
                    <SearchInput placeholder="Search"></SearchInput>
                </SearchBar>
            </LogoSection>
            <NavigationSection>
                <NavigationItem to="/courses">Kategorie</NavigationItem>
                <NavigationItem to="/discover">Odkrywaj</NavigationItem>
                <NavigationItem to="/">Blog</NavigationItem>
                <NavigationItem to="/">FAQ</NavigationItem>
            </NavigationSection>
            { currentUser && 
                <AccountSection>

                    <SocialIcon iconLink={socialIcons.youtube} onClick={() => window.open('https://www.youtube.com/', '_blank')}/>
                    <SocialIcon iconLink={socialIcons.instagram} onClick={() => window.open('https://www.instagram.com/', '_blank')} />
                    <SocialIcon iconLink={socialIcons.facebook} onClick={() => window.open('https://www.facebook.com/', '_blank')} />
                    
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
