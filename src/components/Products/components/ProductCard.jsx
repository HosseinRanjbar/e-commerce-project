import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProductProvider } from '../../../HOC/ProductsProvider/ProductsProvider'
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
    rate,
    stock,
    discount = 10
}) => {

    const [showAddToCart, setShowAddToCart] = useState(false)

    const { setCart, cart } = useProductProvider()

    const fixedPrice = price.toFixed(2);
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

                <div className='product-price'>$ {fixedPrice} <span className='discount-price'>${(fixedPrice - (fixedPrice * (discount / 100))).toFixed(2)}</span></div>

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
                            to={`/product/${id}`}
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
                        <Button
                            color='red'
                            borderRadius={"2rem"}
                            onClick={() => {
                                if (stock < 0) return
                                setCart(previous => {
                                    setLocal("cart", [...previous, { id, name, qty: 1 }])
                                    return ([
                                        ...previous,
                                        { id, name, qty: 1 }
                                    ])
                                })



                            }}
                        >Add to Cart</Button>
                    </Tooltip>
                </div>
            )
            }
        </div>
    )
}

export default ProductCard