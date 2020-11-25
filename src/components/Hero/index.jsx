
import React from 'react';
import Navbar from "../Navbar";
import { HeroContainer } from "./HeroElements";
import { HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from "./HeroElements";




function Hero() {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Behtarin Pizzayi Tirmiz</HeroH1>
                    <HeroP>Dar 10 daqiqa tayyor meshavad</HeroP>
                    <HeroBtn>Hozir Suporish Bidihed</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;
