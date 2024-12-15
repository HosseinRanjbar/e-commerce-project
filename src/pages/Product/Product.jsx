import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useGetData from '../../hooks/useGetData/useGetData'
import './styles/Product.css'
import Loading from '../../components/Loading/Loading'
import { getArray } from '../../components/Products/meta/utils'
import StarRank from '../../utils/svgIcons/starRank'
import Combobox from '../../components/Combobox/Combobox'
import Button from '../../components/Button/Button'
import { IoIosHeartEmpty } from "react-icons/io";
import { GoArrowSwitch } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaPinterest } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { getLocal } from '../../utils/common'
import ErrorHandler from '../../components/Errors/ErrorHandler'

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
        const src = getLocal("imageSrc")

        return [...src, ...src]
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
                                                        console.log(index, item);
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
                                                <IoIosHeartEmpty />
                                                ADD TO WISHLIST
                                            </div>
                                            <div>
                                                <GoArrowSwitch />
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
                                                    <FaFacebookF />
                                                </div>
                                                <div className='social-media'>
                                                    <FaXTwitter />
                                                </div>
                                                <div className='social-media'>
                                                    <FaInstagram />
                                                </div>
                                                <div className='social-media'>
                                                    <FaPinterest />
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