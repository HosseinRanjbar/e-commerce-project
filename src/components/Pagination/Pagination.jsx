import React, { useContext, useMemo } from 'react'
import { ProductsContext } from '../../pages/Home/context/ProductsContext'
import { getLocal, setLocal } from '../../utils/common'
import Button from '../Button'
import Loading from '../Loading/Loading'
import './styles/Pagination.css'

const Pagination = ({

}) => {

    const {
        productsData,
        productsLoading,
        productsError,
        productsfetchData
    } = useContext(ProductsContext)

    const local = useMemo(() => {
        return getLocal("pagination")
    }, [getLocal])

    const currentPage = useMemo(() => {
        return productsData?.pagination?.currentPage ?? local?.currentPage
    }, [productsData, local])

    const totalPages = useMemo(() => {
        return productsData?.pagination?.totalPages ?? local?.totalPages
    }, [productsData, local])



    const getParams = (page) => {
        const pagination = getLocal("pagination") ?? {}

        const categoriesChecked = getLocal("categoriesChecked") ?? []

        const search = getLocal("search") ?? ""

        if (pagination?.itemsPerPage) {
            if (search) {
                if (categoriesChecked?.length) {
                    return { category: categoriesChecked[0], search, page: page?.target?.textContent, limit: pagination.itemsPerPage }
                } else {
                    return { search, page: page?.target?.textContent, limit: pagination.itemsPerPage }
                }
            } else {
                return { page: page?.target?.textContent, limit: pagination.itemsPerPage }
            }
        } else {
            return { page: page?.target?.textContent }
        }
    }

    return (
        <div className='pagination-container'>
            {productsLoading && <Loading className="loading-pagination" />}

            <div className='page-container'>
                {currentPage > 3 ? <Button
                    defaultButton
                    className='page'
                    onClick={(v) => {
                        productsfetchData(null, getParams(v), null, null)
                    }}

                >1
                </Button> : null}

                {currentPage > 3 ? <div>...</div> : null}

                {currentPage > 2 ? <Button
                    defaultButton
                    className='page'
                    onClick={(v) => {
                        productsfetchData(null, getParams(v), null, null)

                    }}

                >{+currentPage - 2}
                </Button> : null}

                {currentPage > 1 ? <Button
                    defaultButton
                    className='page'
                    onClick={(v) => {
                        productsfetchData(null, getParams(v), null, null)
                    }}

                >{+currentPage - 1}
                </Button> : null}

                {!isNaN(currentPage) && <Button
                    defaultButton
                    className='page current-page'
                    onClick={(v) => {
                        productsfetchData(null, getParams(v), null, null)
                    }}

                >{Number(currentPage)}
                </Button>}

                {totalPages > currentPage ? <Button
                    defaultButton
                    className='page'
                    onClick={(v) => {
                        productsfetchData(null, getParams(v), null, null)
                    }}

                >{+currentPage + 1}
                </Button> : null}

                {totalPages > currentPage + 1 ? <Button
                    defaultButton
                    className='page'
                    onClick={(v) => {
                        productsfetchData(null, getParams(v), null, null)
                    }}
                >{+currentPage + 2}

                </Button> : null}

                {totalPages > currentPage + 2 ? <div>...</div> : null}

                {totalPages > currentPage + 2 ?
                    (
                        <Button
                            defaultButton
                            className='page'
                            onClick={(v) => {
                                productsfetchData(null, getParams(v), null, null)
                            }}
                        >{totalPages}</Button>
                    )

                    : null}
            </div>
        </div>
    )
}

export default Pagination