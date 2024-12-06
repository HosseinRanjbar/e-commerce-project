import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import useGetData from '../../../hooks/useGetData/useGetData'
import { FILTER_ENDPOINTS } from '../meta/constants'
import '../styles/Categories.css'
import Loading from '../../Loading/Loading'
import { ProductsContext } from '../../../pages/Home/context/ProductsContext'
import { getLocal, setLocal } from '../../../utils/common'
import ErrorHandler from '../../Errors/ErrorHandler'

const Categories = () => {

    const { data: categories, loading, fetchData: fetchCategories, error } = useGetData({
        url: FILTER_ENDPOINTS.categories,
        fetchFirst: false,
        onSuccess: (data) => {
            setLocal("categories", data)
        }
    })

    const { productsfetchData, productsLoading } = useContext(ProductsContext)

    // const [checkbox, setCheckbox] = useState([])



    const onCategoriesChange = useCallback((e) => {

        // setCheckbox(prevState => {
        //     return [...prevState, e.target.id]
        // })


        productsfetchData(null, { category: e.target.id })


    }, [])


    useEffect(() => {


        const localStorage = getLocal("categories")

        if (!localStorage) {
            fetchCategories()
        } else return




    }, [])

    const categoriesData = useMemo(() => {

        const localStorage = getLocal("categories")

        return localStorage ? localStorage : categories

    }, [getLocal, localStorage, categories])



    return (
        <div className='categories-container'>
            <h3 className='categories-title'>Categories</h3>

            <form className='categories-item-wrapper'>
                {loading ?
                    <Loading />
                    : (categoriesData ? categoriesData?.map((item) => {

                        return (
                            <div className='categories-item' key={item._id}>
                                <label className='categories-item-name' htmlFor={item.name}>
                                    <input
                                        className='categories-item-checkbox'
                                        type='checkbox'
                                        onChange={onCategoriesChange}
                                        name={item.name}
                                        id={item?._id}
                                        disabled={productsLoading}
                                    />
                                    {item.name} <span className='productCount'>{`(${item.productCount})`}</span>
                                </label>
                            </div>
                        )
                    })
                        : <ErrorHandler errorMessage={error} />)}
            </form>

        </div>
    )
}

export default Categories


