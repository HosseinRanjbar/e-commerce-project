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

    const [checkbox, setCheckbox] = useState([])

    const onCategoriesChange = (e) => {
        const local = getLocal("pagination")
        productsfetchData(null, { category: e.target.id }, 1, local?.itemsPerPage)
            .then((data) => {
                setLocal("pagination", (prev) => ({
                    ...prev, category: e.target.id
                })
                )
            })
        const isChecked = e?.target?.checked;
        const categoryId = e?.target?.id;
        setCheckbox(prev => {
            const updatedChecked = isChecked ?
                [...prev, categoryId] :
                prev.filter((id) => id !== categoryId)
            setLocal("categoriesChecked", updatedChecked)
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

    }, [getLocal, localStorage, categories])



    const getLocalCategoriesChecked = () => {
        const categoriesChecked = getLocal("categoriesChecked")

        return [...checkbox, categoriesChecked]
    }
    console.log(getLocalCategoriesChecked(), "categoriesCheckessssssssssssssssd");

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


// import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
// import useGetData from '../../../hooks/useGetData/useGetData'
// import { FILTER_ENDPOINTS } from '../meta/constants'
// import '../styles/Categories.css'
// import Loading from '../../Loading/Loading'
// import { ProductsContext } from '../../../pages/Home/context/ProductsContext'
// import { getLocal, setLocal } from '../../../utils/common'
// import ErrorHandler from '../../Errors/ErrorHandler'

// const Categories = () => {
//     // Use state to manage checked category IDs
//     const [checkedCategories, setCheckedCategories] = useState(getLocal("categoriesChecked") || []);

//     const { data: categories, loading, fetchData: fetchCategories, error } = useGetData({
//         url: FILTER_ENDPOINTS.categories,
//         fetchFirst: false,
//         onSuccess: (data) => {
//             setLocal("categories", data);
//         }
//     });

//     const { productsfetchData, productsLoading } = useContext(ProductsContext);

//     const onCategoriesChange = useCallback((e) => {
//         const categoryId = e.target.id;
//         const isChecked = e.target.checked;


//         // Update checkedCategories based on checkbox state
//         setCheckedCategories((prevChecked) => {
//             const updatedChecked = isChecked
//                 ? [...prevChecked, categoryId]
//                 : prevChecked.filter((id) => id !== categoryId);
//             setLocal("categoriesChecked", updatedChecked);
//             return updatedChecked;
//         });

//         // Update local storage for pagination (assuming it's handled elsewhere)
//         // Update local storage here if pagination logic relies on checked categories

//         productsfetchData(null, { category: categoryId }, 1, /* itemsPerPage */); // Fetch products for selected category
//     }, [productsfetchData]); // Ensure productsfetchData is available in dependency array

//     useEffect(() => {
//         const localStorageCategories = getLocal("categories");

//         if (!localStorageCategories) {
//             fetchCategories();
//         }
//     }, [fetchCategories, getLocal]);

//     const categoriesData = useMemo(() => {
//         const localStorageCategories = getLocal("categories");

//         return localStorageCategories ? localStorageCategories : categories;
//     }, [getLocal, localStorage, categories]);

//     const categoriesCheckboxes = useMemo(() => {
//         return checkedCategories; // Use the state for checked categories
//     }, [checkedCategories]);

//     return (
//         <div className='categories-container'>
//             <h3 className='categories-title'>Categories</h3>

//             <form className='categories-item-wrapper'>
//                 {loading ?
//                     <Loading />
//                     : (categoriesData ? categoriesData?.map((item) => (
//                         <div className='categories-item' key={item._id}>
//                             <label className='categories-item-name' htmlFor={item.name}>
//                                 <input
//                                     className='categories-item-checkbox'
//                                     type='checkbox'
//                                     onChange={onCategoriesChange}
//                                     name={item.name}
//                                     id={item._id}
//                                     disabled={productsLoading}
//                                     checked={categoriesCheckboxes.includes(item._id)} // Set checked state based on categoriesCheckboxes
//                                 />
//                                 {item.name} <span className='productCount'>{`(${item.productCount})`}</span>
//                             </label>
//                         </div>
//                     ))
//                         : <ErrorHandler errorMessage={error} />)}
//             </form>
//         </div>
//     );
// };

// export default Categories;