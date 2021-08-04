import React from 'react'
import { productData } from './data'
import { ProductButton, ProductCard, ProductDesc, ProductImage, ProductInfo, ProductPrice, ProductsContainer, ProductTitle, ProductWrapper,ProductsHeading } from './ProductsElements'


function Products({heading, data}) {
    return (
       
       <ProductsContainer>
           <ProductsHeading>{heading}</ProductsHeading>
           <ProductWrapper>
               {data.map((product, index) => {
                   return (
                       <ProductCard key={index}>
                           <ProductImage src={product.img} alt={product.alt}/>
                           <ProductInfo>
                               <ProductTitle>{product.name}</ProductTitle>
                               <ProductDesc>{product.desc}</ProductDesc>
                               <ProductPrice>{product.price}</ProductPrice>
                               <ProductButton>{product.button}</ProductButton>
                           </ProductInfo>
                       </ProductCard>
                   )
               })}
           </ProductWrapper>
       </ProductsContainer>
    )
}

export default Products
