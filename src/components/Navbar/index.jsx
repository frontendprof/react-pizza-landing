
import React from 'react';
import {
    Nav,
    NavLink,
    NavIcon,
    Bars
} from "./NavbarElements";




function Navbar({ toggle }) {
    const style1 = { "fontFamily": 'Monoton', "marginLeft": "12px", "fontSize": "3rem", "color": "yellow" };
    const style2 = { "boxShadow": "-3px 1px #fdc500" };


    return (
        <>
            <Nav>
                <NavLink to="/" style={style2}>PizzBurg<span style={style1}>Café</span></NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar;
