import React from 'react'
import useGetData from '../../hooks/useGetData/useGetData'
import ProductCard from './components/ProductCard'
import './styles/Products.css'
import Combobox from '../../components/Combobox/Combobox'

const Products = () => {

    const { data: productsData } = useGetData({
        url: "https://kaaryar-ecom.liara.run/v1/products?page=1&limit=10"
    })
    return (
        <>
            <div className='product-header'>
                <div className='flex justify-between p-2'>
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
                </div>

                <div className='products-container'>
                    {productsData?.products?.map((product, index) => {
                        console.log(product);

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
            </div>

        </>
    )
}

export default Products