import { useCallback, useContext } from 'react'
import { ProductsContext } from '../../pages/Home/context/ProductsContext'
import { getLocal, setLocal } from '../../utils/common'
import Combobox from '../Combobox/Combobox'
import ErrorHandler from '../Errors/ErrorHandler'
import Loading from '../Loading/Loading'
import Pagination from '../Pagination/Pagination'
import ProductCard from './components/ProductCard'
import './styles/Products.css'

const Products = () => {

    const { productsData, productsLoading, productsError, productsfetchData, productsDataValue } = useContext(ProductsContext)

    const showItemsNumberHandler = useCallback((e) => {
        const local = getLocal("pagination")

        productsfetchData(null, { category: local?.category }, local?.currentPage, e?.target?.value).then((data) => {
            setLocal("pagination", data?.pagination)
        })
    }, [getLocal])


    return (
        <>
            <div className='products'>
                <div className='flex justify-between p-2'>
                    <div className='flex gap '>
                        <div className='flex items-center gap'>
                            SORT BY: <Combobox
                                items={[
                                    { id: 1, name: "popular", value: "popular" },
                                    { id: 2, name: "lowest price ", value: "lowest price" },
                                    { id: 3, name: "highest price", value: "highest price" },
                                ]}
                            />
                        </div>
                        <div className='flex items-center gap'>
                            SHOW: <Combobox
                                items={[
                                    { id: 1, name: 10, value: 10 },
                                    { id: 1, name: 20, value: 20 },
                                    { id: 2, name: 50, value: 50 },

                                ]}
                                onChange={showItemsNumberHandler}
                            />
                        </div>
                    </div>

                    <div className='view'>
                        <svg className='view-svg-red' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" ><path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"></path></svg>

                        <svg className='view-svg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" ><path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H18.8zM8 11h12v2H8zm0 5h12v2H8z"></path></svg>
                    </div>
                </div>
                {productsLoading ?
                    <Loading />
                    :
                    <div className={productsData ? 'products-container' : "error"}>
                        {productsData ? productsDataValue?.map((product, index) => {
                            return (
                                <>
                                    <ProductCard
                                        alt={product?.name}
                                        category={product?.category}
                                        description={product?.description}
                                        id={product?._id}
                                        name={product?.name}
                                        price={product?.price}
                                        src={product?.images}
                                        key={product?._id}
                                        rate={index}
                                    />
                                </>
                            )
                        }) : <ErrorHandler errorMessage={productsError} />}
                    </div>
                }

                <Pagination />
            </div>

        </>
    )
}

export default Products