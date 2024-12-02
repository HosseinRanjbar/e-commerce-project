import React, { useState } from 'react'
import Button from '../../../components/Button/Button'
import StarRank from '../../../utils/svgIcons/starRank'
import { getArray } from '../meta/utils'
import '../styles/ProductsCard.css'

const ProductCard = ({
    name,
    category,
    src,
    alt,
    price,
    description,
    id,
    rate
}) => {

    const [showAddToCart, setShowAddToCart] = useState(false)

    return (
        <div style={{ position: "relative", cursor: "pointer" }} id={id} onMouseEnter={() => setShowAddToCart(true)} onMouseLeave={() => setShowAddToCart(false)}>
            <div className='product-card-container'>
                <img src={src} alt={alt} />

                <div className='product-category'>{category?.name}</div>

                <div className='product-name'>{name}</div>

                <div className='product-description'>{description}</div>

                <div className='product-price'>$ {price.toFixed(2)} <span className='discount-price'>${(price.toFixed(2) - (price.toFixed(2) * (10 / 100))).toFixed(2)}</span></div>

                <div className='product-rank'>
                    <div className='start-rank-container'>
                        {getArray(5, rate).map((item, index) => {
                            return <StarRank key={index} item={item} />
                        })}
                    </div>
                </div>
            </div>
            {showAddToCart && (
                <div className='add-to-cart-button-container'>
                    <Button color='red'>Add to Cart</Button>
                </div>
            )
            }
        </div>
    )
}

export default ProductCard