
import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";




function Navbar() {
    return (
        <>
            <Nav>
                <NavLink to="/">PizzBurg</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar;
