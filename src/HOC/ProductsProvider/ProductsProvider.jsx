import React, { useContext, useMemo, useState } from 'react'
import { getLocal, setLocal } from '../../utils/common'
import useGetData from '../../hooks/useGetData/useGetData'
import { ProductsContext } from '../../pages/Home/context/ProductsContext'

const ProductsProvider = ({ children }) => {
    const [productsDataValue, setProductsDataValue] = useState([])


    const category = useMemo(() => {
        const category = getLocal("categoriesChecked") ?? []

        return [...category]
    }, [])

    const search = useMemo(() => {
        const searched = getLocal("search") ?? ""

        return searched
    }, [getLocal])

    const params = useMemo(() => {
        if (category.length) {
            if (search) {
                return { category: category[0], search }
            } else {
                return { category: category[0] }
            }
        } else {
            if (search) {
                return { search }
            } else {
                return {}
            }
        }
    }, [search, category, getLocal])

    const { data: productsData, loading, fetchData, error } = useGetData({
        url: "https://kaaryar-ecom.liara.run/v1/products",
        params,
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
