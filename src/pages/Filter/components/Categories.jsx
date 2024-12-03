import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import useGetData from '../../../hooks/useGetData/useGetData'
import { FILTER_ENDPOINTS } from '../meta/constants'
import '../styles/Categories.css'
import Loading from '../../../components/Loading/Loading'
import { ProductsContext } from '../../Home/context/ProductsContext'
import { getLocal, setLocal } from '../../../utils/common'

const Categories = () => {

    const { data: categories, loading, fetchData } = useGetData({
        url: FILTER_ENDPOINTS.categories,
        fetchFirst: false
    })

    const { productsfetchData, productsLoading } = useContext(ProductsContext)

    const [checkbox, setCheckbox] = useState([])

    const onCategoriesChange = (e) => {
        console.dir(e.target.id, "e.target");

        setCheckbox(prev => {
            if (e.target.checked) {
                return [...prev, e.target.id]
            } else {
                return prev.filter(item => item !== e.target.id)

            }
        })


    }
    useEffect(() => {

        const localCategories = getLocal("categories")
        console.log(typeof JSON.parse(localCategories), "localCategories");

        if (!JSON.parse(localCategories)) {
            fetchData()
        } else return
        // productsfetchData(`https://kaaryar-ecom.liara.run/v1/products?category=${checkbox.join("|")}&page=1&limit=10`)
        return () => setLocal("categories", categories)

    }, [localStorage])


    return (
        <div className='categories-container'>
            <h3 className='categories-title'>Categories</h3>

            <form className='categories-item-wrapper'>
                {loading ?
                    <Loading />
                    : (categories?.map((item) => {

                        return (
                            <div className='categories-item' key={item._id}>
                                <label className='categories-item-name' htmlFor={item.name}>
                                    <input
                                        className='categories-item-checkbox'
                                        type='checkbox'
                                        onChange={onCategoriesChange}
                                        name={item.name}
                                        value={checkbox}
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