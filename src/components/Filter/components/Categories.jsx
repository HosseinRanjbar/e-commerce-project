import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import useGetData from '../../../hooks/useGetData/useGetData'
import { FILTER_ENDPOINTS } from '../meta/constants'
import '../styles/Categories.css'
import Loading from '../../Loading/Loading'
import { ProductsContext } from '../../../pages/Home/context/ProductsContext'
import { getLocal, setLocal } from '../../../utils/common'

const Categories = () => {

    const { data: categories, loading, fetchData: fetchCategories } = useGetData({
        url: FILTER_ENDPOINTS.categories,
        fetchFirst: false,
        onSuccess: (data) => {
            setLocal("categories", JSON.stringify(data))

        }
    })

    const { productsfetchData, productsLoading } = useContext(ProductsContext)

    const [checkbox, setCheckbox] = useState([])



    const onCategoriesChange = useCallback((e) => {

        setCheckbox(prevState => {
            return [...prevState, e.target.id]
        })


        productsfetchData("https://kaaryar-ecom.liara.run/v1/products", { category: e.target.id })


    }, [])


    useEffect(() => {


        const localStorage = getLocal("categories")

        if (!localStorage) {
            fetchCategories()
        } else return




    }, [categories])

    const categoriesData = useMemo(() => {

        const localStorage = getLocal("categories")

        return JSON.parse(localStorage) ? JSON.parse(localStorage) : categories

    }, [categories])



    return (
        <div className='categories-container'>
            <h3 className='categories-title'>Categories</h3>

            <form className='categories-item-wrapper'>
                {loading ?
                    <Loading />
                    : (categoriesData?.map((item) => {

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
                    )}
            </form>

        </div>
    )
}

export default Categories


