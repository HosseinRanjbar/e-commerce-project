import React, { useContext } from 'react'
import useGetData from '../../hooks/useGetData/useGetData'
import ProductCard from './components/ProductCard'
import './styles/Products.css'
import Combobox from '../Combobox/Combobox'
import { ProductsContext } from '../../pages/Home/context/ProductsContext'
import Loading from '../Loading/Loading'

const Products = () => {

    const { productsData, productsLoading } = useContext(ProductsContext)

    return (
        <>
            <div className='product-header'>
                <div className='flex justify-between p-2'>
                    <div className='flex gap '>
                        <div className='flex items-center gap'>
                            SORT BY: <Combobox
                                items={[
                                    { id: 1, name: "popular", value: "popular" },
                                    { id: 2, name: "lowest price ", value: "lowest price" },
                                    { id: 3, name: "highest price", value: "highest price" },
                                ]}
                            />
                        </div>
                        <div className='flex items-center gap'>
                            SHOW: <Combobox
                                items={[
                                    { id: 1, name: 20, value: 20 },
                                    { id: 2, name: 50, value: 50 },
                                    { id: 3, name: 100, value: 20 },

                                ]}
                            />
                        </div>
                    </div>

                    <div className='view'>
                        <svg className='view-svg-red' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" ><path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"></path></svg>

                        <svg className='view-svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" ><path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"></path></svg>
                    </div>
                </div>
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