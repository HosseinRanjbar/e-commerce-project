import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../components/Button'
import Combobox from '../../components/Combobox/Combobox'
import ErrorHandler from '../../components/Errors/ErrorHandler'
import Icon from '../../components/Icon/Icon'
import Loading from '../../components/Loading/Loading'
import { getArray } from '../../components/Products/meta/utils'
import useGetData from '../../hooks/useGetData/useGetData'
import { getLocal } from '../../utils/common'
import StarRank from '../../utils/svgIcons/starRank'
import './styles/Product.css'

const Product = () => {

    const [src, setSrc] = useState(getLocal("imageSrc")[0])

    const { productId } = useParams()

    const {
        data: productData,
        loading: productLoading,
        error: productError,
        fetchData: fetchProduct
    } = useGetData({
        url: `https://kaaryar-ecom.liara.run/v1/products/${productId}`
    })

    const getImageSrc = () => {
        const imgSrc = getLocal("imageSrc")

        return [...src, ...imgSrc]
    }

    return (
        <div>

            <div className='container'>
                <div className='main-content'>
                    {productLoading ?
                        <Loading />
                        :
                        productError ?
                            <ErrorHandler errorMessage={productError} />
                            :
                            (
                                <>
                                    <div className='slide-show-container'>
                                        <div className='slide-show'>
                                            {getImageSrc().map((item, index) => {
                                                return (
                                                    <div className='slide-show-item' onClick={() => {
                                                        setSrc(item)
                                                    }}>
                                                        <img src={item} alt="" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className='each-content'>
                                        <div className='main-image'>
                                            <img src={src} alt="" />
                                        </div>
                                    </div>

                                    <div className='each-content'>
                                        <h2>{productData?.name}</h2>

                                        <div className='product-rank-page'>
                                            <div className='start-rank-container-page'>
                                                {getArray(5, 3).map((item, index) => {
                                                    return <StarRank key={index} item={item} />
                                                })}
                                            </div>
                                        </div>

                                        <div className='product-price'>$ {productData?.price.toFixed(2)} <span className='discount-price'>${(productData?.price.toFixed(2) - (productData?.price.toFixed(2) * (10 / 100))).toFixed(2)}</span></div>

                                        <div className='description-product'>
                                            {productData?.description}
                                        </div>

                                        <div className='flex g-1'>
                                            <div className='flex items-center'>
                                                size :  <Combobox items={[{ id: 1, name: "X" }]} />
                                            </div>

                                            <div className='flex items-center'>
                                                color:  <Combobox items={[{ id: 1, name: "Red" }]} />
                                            </div>
                                        </div>

                                        <div className='quantity-wrapper'>
                                            qty :
                                            <div className='qty-input-container'>
                                                <input type="number" id='qty-input' value={1} />
                                                <div className='qty-input-buttons'>
                                                    <Button
                                                        defaultButton
                                                        className='plus-minus-button'
                                                    >
                                                        +
                                                    </Button>
                                                    <Button
                                                        defaultButton
                                                        className='plus-minus-button'

                                                    >
                                                        -
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='add-to-cart-container'>
                                            <Button
                                                color='red'
                                            >
                                                ADD TO CART
                                            </Button>
                                        </div>

                                        <div className='wishlist-compare'>
                                            <div>
                                                <Icon type={"Heart"} />
                                                ADD TO WISHLIST
                                            </div>
                                            <div>
                                                <Icon type="Arrow" />
                                                ADD TO COMPARE
                                            </div>
                                        </div>

                                        <div>
                                            CATEGORY : {productData?.category?.name}
                                        </div>

                                        <div className='social-media-container'>
                                            share:
                                            <div className='social-media-wrapper-product'>
                                                <div className='social-media'>
                                                    <Icon type={"Facebook"} />
                                                </div>
                                                <div className='social-media'>
                                                    <Icon type={"Twitter"} />
                                                </div>
                                                <div className='social-media'>
                                                    <Icon type={"Instagram"} />
                                                </div>
                                                <div className='social-media'>
                                                    <Icon type={"Pinterest"} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                    }

                </div>
            </div>
        </div>
    )
}

export default Product