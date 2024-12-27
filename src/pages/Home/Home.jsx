import { useMemo, useState } from 'react'
import MainContent from '../../components/MainContent/MainContent'
import useGetData from '../../hooks/useGetData/useGetData'
import { getLocal, setLocal } from '../../utils/common'
import { ProductsContext } from './context/ProductsContext'
import { HOME_ENDPOINTS } from './meta/constants'

const Home = () => {


    const currentPageValue = useMemo(() => {
        const pagination = getLocal("pagination")

        return pagination?.currentPage ?? 1
    }, [getLocal])

    const pageSize = useMemo(() => {
        const pagination = getLocal("pagination")

        return pagination?.itemsPerPage ?? 10
    }, [getLocal])

    const category = useMemo(() => {
        const category = getLocal("categoriesChecked") ?? []

        return [...category]
    }, [])

    const { data: productsData, loading, fetchData, error } = useGetData({
        url: HOME_ENDPOINTS.products,
        page: currentPageValue,
        pageSize: pageSize,
        params: category.length > 0 ? { category: category[0] } : {},
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