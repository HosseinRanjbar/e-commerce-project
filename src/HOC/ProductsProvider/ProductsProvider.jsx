import React, { useContext, useMemo, useState } from 'react';
import useGetData from '../../hooks/useGetData/useGetData';
import { ProductsContext } from '../../pages/Home/context/ProductsContext';
import { getLocal, setLocal } from '../../utils/common';

const ProductsProvider = ({ children }) => {
    const [productsDataValue, setProductsDataValue] = useState([]);

    const category = useMemo(() => {
        return getLocal('categoriesChecked') ?? [];
    }, [getLocal]);

    const search = useMemo(() => {
        return getLocal('search') ?? '';
    }, [getLocal]);

    const params = useMemo(() => {
        if (category.length || search) {
            return { category: category[0], search };
        } else {
            return {};
        }
    }, [category, search]);

    const { data: productsData, loading, fetchData, error } = useGetData({
        url: 'https://kaaryar-ecom.liara.run/v1/products',
        params,
        onSuccess: (data) => {
            setLocal('pagination', data?.pagination);
            setProductsDataValue(data?.products);
        },
    });

    return (
        <ProductsContext.Provider
            value={{
                productsfetchData: fetchData,
                productsData,
                productsLoading: loading,
                productsError: error,
                setProductsDataValue,
                productsDataValue,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export const useProductProvider = () => useContext(ProductsContext);

export default ProductsProvider;