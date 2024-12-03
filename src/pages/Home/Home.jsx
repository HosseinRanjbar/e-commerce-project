import React from 'react'
import Header from '../../components/Header/Header'
import MainContent from '../../components/MainContent/MainContent'
import Footer from '../../components/Footer/Footer'
import { ProductsContext } from './context/ProductsContext'
import useGetData from '../../hooks/useGetData/useGetData'

const Home = () => {
    const { data: productsData, loading, fetchData } = useGetData({
        url: "https://kaaryar-ecom.liara.run/v1/products?page=1&limit=10"
    })

    return (
        <>
            <Header />
            <ProductsContext.Provider
                value={{
                    productsfetchData: fetchData,
                    productsData,
                    productsLoading: loading
                }}
            >
                <MainContent />
            </ProductsContext.Provider>
            <Footer />
        </>
    )
}

export default Home