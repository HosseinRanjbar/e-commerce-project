import React, { useContext, useEffect, useMemo, useState } from 'react'
import useGetData from '../../../hooks/useGetData/useGetData'
import { ProductsContext } from '../../../pages/Home/context/ProductsContext'
import { getLocal, setLocal } from '../../../utils/common'
import ErrorHandler from '../../Errors/ErrorHandler'
import Loading from '../../Loading/Loading'
import { FILTER_ENDPOINTS } from '../meta/constants'
import '../styles/Categories.css'

const Categories = () => {

    const { data: categories, loading, fetchData: fetchCategories, error } = useGetData({
        url: FILTER_ENDPOINTS.categories,
        fetchFirst: false,
        onSuccess: (data) => {
            setLocal("categories", data)
        }
    })

    const { productsfetchData, productsLoading } = useContext(ProductsContext)

    const [checkbox, setCheckbox] = useState([])

    const onCategoriesChange = (e) => {
        const local = getLocal("pagination")


        const isChecked = e?.target?.checked;

        const categoryId = e?.target?.id;

        setCheckbox(prev => {
            const updatedChecked = isChecked ? [...prev, categoryId] : prev.filter((id) => id !== categoryId)

            setLocal("categoriesChecked", updatedChecked)

            const getCategoriesChecked = getLocal("categoriesChecked") ?? []
            console.log(updatedChecked, "updatedChecked");

            productsfetchData(null, getCategoriesChecked.length > 0 ? { category: getCategoriesChecked[0] } : {}, 1, local?.itemsPerPage)

            return updatedChecked
        })


    }


    useEffect(() => {


        const localStorage = getLocal("categories")

        if (!localStorage) {
            fetchCategories()
        } else return




    }, [])

    const categoriesData = useMemo(() => {

        const localStorage = getLocal("categories")

        return localStorage ? localStorage : categories

    }, [categories])



    const getLocalCategoriesChecked = () => {
        const categoriesChecked = getLocal("categoriesChecked") ?? []

        return [...categoriesChecked]
    }

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
                                        value={getLocalCategoriesChecked()?.includes(item?._id)}
                                        checked={getLocalCategoriesChecked()?.includes(item?._id)}
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