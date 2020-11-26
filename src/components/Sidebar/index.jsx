
import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from "./SidebarElements";





function Sidebar({ isOpen, toggle }) {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>

            <Icon>
                <CloseIcon />
            </Icon>

            <SidebarMenu>
                <SidebarLink to="/">Pizzaho</SidebarLink>
                <SidebarLink to="/">Shiriniho</SidebarLink>
                <SidebarLink to="/">Menyuyi Komil</SidebarLink>
            </SidebarMenu>

            <SideBtnWrap>
                <SidebarRoute to="/">Suporish bidihed</SidebarRoute>
            </SideBtnWrap>

        </SidebarContainer>
    )
}

export default Sidebar;
