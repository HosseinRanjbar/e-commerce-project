import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { ProductsContext } from './context/ProductsContext'
import useGetData from '../../hooks/useGetData/useGetData'
import { HOME_ENDPOINTS } from './meta/constants'
import MainContent from '../../components/MainContent/MainContent'

const Home = () => {
    const { data: productsData, loading, fetchData } = useGetData({
        url: HOME_ENDPOINTS.products
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