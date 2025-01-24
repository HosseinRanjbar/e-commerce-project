import { useState } from 'react'
import { Link } from 'react-router-dom'
import { setLocal } from '../../../utils/common'
import CompareIcon from '../../../utils/svgIcons/CompareIcon'
import EyeIcon from '../../../utils/svgIcons/EyeIcon'
import HeartIcon from '../../../utils/svgIcons/HeartIcon'
import StarRank from '../../../utils/svgIcons/starRank'
import Button from '../../Button'
import Tooltip from '../../Tooltip/Tooltip'
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
        <div
            style={{ position: "relative", cursor: "pointer" }}
            id={id}
            onMouseEnter={() => setShowAddToCart(true)}
            onMouseLeave={() => setShowAddToCart(false)}
        >
            <div className='product-card-container'>
                <img src={src[0] ?? src[1]} alt={alt} />

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


                    <Tooltip
                        tooltipText='view product'
                    >
                        <Link
                            to={`/${id}`}
                            onClick={() => {
                                setLocal("imageSrc", src)
                            }}
                        >
                            <EyeIcon />
                        </Link>
                    </Tooltip>

                    <Tooltip tooltipText="compare products">
                        <CompareIcon />
                    </Tooltip>

                    <Tooltip
                        tooltipText="add to wishlist"
                    >
                        <HeartIcon />
                    </Tooltip>


                </div>

            </div>
            {showAddToCart && (
                <div className='add-to-cart-button-container'>
                    <Tooltip
                        tooltipText="add to cart"
                        right="25px"
                    >
                        <Button color='red' borderRadius={"2rem"}>Add to Cart</Button>
                    </Tooltip>
                </div>
            )
            }
        </div>
    )
}

export default ProductCard