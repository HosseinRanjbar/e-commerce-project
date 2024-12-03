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

                <div className='like-compare-eye-container'>
                    <div
                        className='product-card-eye'
                    >

                        <svg xmlns="http://www.w3.org/2000/svg"  >
                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path fill-rule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" />
                        </svg>
                    </div>

                    <svg className='compare-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" ><path d="M15 20V5h3l-5.1-5L8 5h3v15zM2 0v15h-3l4.9 5L9 15H6V0z" /></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="add-to-favorite">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>


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