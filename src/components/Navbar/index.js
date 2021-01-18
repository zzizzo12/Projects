import React from 'react';
import { FaBars } from 'react-icons/fa';
import { 
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink } from './NavbarElement';
    import imgLogo from '../../images/logoOEC.png';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    
                    <NavLogo to='/'><img src={imgLogo} />GROEC</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>Questions</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'>Inscription</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Rendez-vous</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>FAQ</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Se connecter</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
