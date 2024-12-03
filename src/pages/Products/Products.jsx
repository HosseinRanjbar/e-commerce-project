import React, { useContext } from 'react'
import useGetData from '../../hooks/useGetData/useGetData'
import ProductCard from './components/ProductCard'
import './styles/Products.css'
import Combobox from '../../components/Combobox/Combobox'
import { ProductsContext } from '../Home/context/ProductsContext'
import Loading from '../../components/Loading/Loading'

const Products = () => {

    const { productsData, productsLoading } = useContext(ProductsContext)
    return (
        <>
            <div className='product-header'>
                {/* <div className='flex justify-between p-2'>
                    <div className='flex gap '>
                        <div className='flex items-center gap'>
                            SORT BY: <Combobox />
                        </div>
                        <div className='flex items-center gap'>
                            VIEW: <Combobox />
                        </div>
                    </div>

                    <div>
                        view
                    </div>
                </div> */}
                {productsLoading ?
                    <Loading />
                    :
                    <div className='products-container'>
                        {productsData?.products?.map((product, index) => {
                            return (
                                <ProductCard
                                    alt={product?.name}
                                    category={product?.category}
                                    description={product?.description}
                                    id={product?._id}
                                    name={product?.name}
                                    price={product?.price}
                                    src={product?.images}
                                    key={product?._id}
                                    rate={index}
                                />
                            )
                        })}
                    </div>
                }
            </div>

        </>
    )
}

export default Products