

import React from 'react';
import {
    ProductsContainer,
    ProductsHeading,
    ProductsWrapper,
    ProductCard,
    ProductImg,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton
} from "./ProductsElements";





function Products({ heading, data }) {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductsWrapper>
                {data.map((product, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ProductButton>{product.button}</ProductButton>
                        </ProductCard>
                    )
                })}
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products
