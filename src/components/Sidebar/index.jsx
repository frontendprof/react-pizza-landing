
import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";





function Sidebar() {
    return (
        <SidebarContainer>

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
