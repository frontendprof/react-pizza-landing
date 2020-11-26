
import React from 'react';
import {
    FeatureContainer,
    FeatureButton
} from "./FeatureElements";



function Feature() {
    const style = { "fontSize": "2rem", "backgroundColor": "#251351", "padding": ".8rem", "bordeRadius": "50%" }
    return (
        <FeatureContainer>
            <h1>Pizza of the day</h1>
            <p>Combination of mushrooms and pepperoni and some olives surely makes your day <span style={style}>😄</span></p>
            <FeatureButton>Suporish bidihed aknun</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
