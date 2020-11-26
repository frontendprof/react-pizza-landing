
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color:#4e0110;
    margin-top:2px;
`

export const FooterWrap = styled.div`
    padding:16px 24px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    max-width:1300px;
    margin:0 auto;
`

export const SocialMedia = styled.section`
    width:max(1300px,100%);
`
export const SocialMediaWrap = styled.section`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1100px;
    margin:16px auto 0 auto;
    
    @media screen and (max-width:820px){
        flex-direction:column;
    }
`

export const SocialLogo = styled(Link)`
    color:#ffc800;
    justify-self:start;
    cursor:pointer;
    text-decoration:none;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    margin-bottoms:16px;
    font-weight:bold;
`

export const SocialIcons = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:240px;
`

export const SocialIconLink = styled.a`
    color:#fff;
    font-size:24px;
`


