import React from 'react'
import '../styles/ProductsCard.css'

const ProductCard = ({
    name,
    category,
    src,
    alt,
    price,
    rating,
    ratingCount,
    description,
    id
}) => {
    return (
        <div id={id}>
            <div className='product-card-container'>
                <img src={src} alt={alt} />

                <div className='product-category'>{category?.name}</div>

                <div className='product-name'>{name}</div>

                <div className='product-description'>{description}</div>

                <div className='product-price'>$ {price.toFixed(2)}</div>
            </div>
        </div>
    )
}

export default ProductCard