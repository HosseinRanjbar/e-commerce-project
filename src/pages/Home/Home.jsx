import { useEffect, useMemo, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MainContent from '../../components/MainContent/MainContent'
import useGetData from '../../hooks/useGetData/useGetData'
import { ProductsContext } from './context/ProductsContext'
import { HOME_ENDPOINTS } from './meta/constants'
import { getLocal, setLocal } from '../../utils/common'

const Home = () => {


    const currentPageValue = useMemo(() => {
        const pagination = getLocal("pagination")

        return pagination?.currentPage ?? 1
    }, [getLocal])

    const pageSize = useMemo(() => {
        const pagination = getLocal("pagination")

        return pagination?.itemsPerPage ?? 10
    }, [getLocal])

    const { data: productsData, loading, fetchData, error } = useGetData({
        url: HOME_ENDPOINTS.products,
        page: currentPageValue,
        pageSize: pageSize,
        onSuccess: (data) => {
            setLocal("pagination", data?.pagination)
            setProductsDataValue(data?.products)
        }
    })

    const [productsDataValue, setProductsDataValue] = useState([])

    return (
        <>
            <ProductsContext.Provider
                value={{
                    productsfetchData: fetchData,
                    productsData,
                    productsLoading: loading,
                    productsError: error,
                    setProductsDataValue,
                    productsDataValue
                }}
            >
                <MainContent />
            </ProductsContext.Provider>
        </>
    )
}

export default Home