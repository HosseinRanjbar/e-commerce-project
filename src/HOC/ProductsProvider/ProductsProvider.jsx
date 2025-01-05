import React, { useContext, useMemo, useState } from 'react'
import { getLocal, setLocal } from '../../utils/common'
import useGetData from '../../hooks/useGetData/useGetData'
import { ProductsContext } from '../../pages/Home/context/ProductsContext'

const ProductsProvider = ({ children }) => {
    const [productsDataValue, setProductsDataValue] = useState([])


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
        url: "https://kaaryar-ecom.liara.run/v1/products",
        page: currentPageValue,
        pageSize: pageSize,
        params: category.length > 0 ? { category: category[0] } : {},
        onSuccess: (data) => {
            setLocal("pagination", data?.pagination)
            setProductsDataValue(data?.products)
        }
    })
    return (
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
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductProvider = () => useContext(ProductsContext)

export default ProductsProvider
