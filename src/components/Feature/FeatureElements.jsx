
import styled from "styled-components";

import FeaturePic from "../../images/14.jpg";


export const FeatureContainer = styled.div`
    background:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,.2)),url(${FeaturePic});
    height:min(100vh,500px);
    background-position:center;
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#fff;
    text-align:center;
    padding:0 1rem;

    h1{
        font-size:clamp(3rem,5vw,5rem)
    }

    p{
        margin-bottom:1rem;
        font-size:clamp(1rem,3vw,2rem);
        font-family: 'Unica One', cursive;
        color:#ffd131;
    }
`

export const FeatureButton = styled.button`
    font-size:1.4rem;
    padding:.6rem 3rem;
    border:none;
    background:#ffc500;
    color:#000;
    transition: .2s ease-out;

    &:hover{
        color:#fff;
        background:#e31837;
        transition:.2s ease-out;
        cursor:pointer;
    }
`
