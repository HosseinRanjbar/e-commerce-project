import React, { useContext, useMemo } from 'react'
import { ProductsContext } from '../../pages/Home/context/ProductsContext'
import { getLocal, setLocal } from '../../utils/common'
import Button from '../Button/Button'
import Loading from '../Loading/Loading'
import Tooltip from '../Tooltip/Tooltip'
import './styles/Pagination.css'

const Pagination = ({

}) => {

    const {
        productsData,
        productsLoading,
        productsError,
        productsfetchData
    } = useContext(ProductsContext)

    const currentPage = productsData?.pagination?.currentPage

    const totalPages = productsData?.pagination?.totalPages

    const local = useMemo(() => {
        return getLocal("pagination")
    }, [getLocal])

    const getParams = (page) => {
        const pagination = getLocal("pagination")

        const categoriesChecked = getLocal("categoriesChecked")

        return { category: categoriesChecked, page: page?.target?.textContent, limit: pagination.itemsPerPage }

    }

    const onClickHandler = (v) => {
        setLocal("pagination", (prev) => ({ ...prev, currentPage: typeof Number(v?.target?.textContent) === "number" ? Number(v?.target?.textContent) : 1 }))
    }

    return (
        <div className='pagination-container'>
            {productsLoading && <Loading />}

            <div className='page-container'>
                {currentPage > 2 ? <Button
                    defaultButton
                    className='page'
                    onClick={(v) => {
                        onClickHandler(v)
                        productsfetchData(null, getLocal("pagination").itemsPerPage)
                    }}

                >{"<"}
                </Button> : null}

                {currentPage > 2 ? <div>...</div> : null}

                {currentPage > 2 ? <Button
                    defaultButton
                    className='page'
                    onClick={(v) => {
                        productsfetchData(null, getParams(v), v?.target?.textContent, getLocal("pagination").itemsPerPage)

                    }}

                >{+currentPage - 2}
                </Button> : null}

                {currentPage > 1 ? <Button
                    defaultButton
                    className='page'
                    onClick={(v) => {
                        productsfetchData(null, getParams(v), getLocal("pagination").itemsPerPage)
                    }}

                >{+currentPage - 1}
                </Button> : null}

                {!isNaN(currentPage) && <Button
                    defaultButton
                    className='page current-page'
                    onClick={(v) => {
                        productsfetchData(null, getParams(v), getLocal("pagination").itemsPerPage)
                    }}

                >{Number(currentPage)}
                </Button>}

                {totalPages > currentPage ? <Button
                    defaultButton
                    className='page'
                    onClick={(v) => {
                        onClickHandler(v)

                        productsfetchData(null, getParams(v), v?.target?.textContent, getLocal("pagination").itemsPerPage)
                    }}

                >{+currentPage + 1}
                </Button> : null}

                {totalPages > currentPage + 1 ? <Button
                    defaultButton
                    className='page'
                    onClick={(v) => {
                        onClickHandler(v)
                        productsfetchData(null, getParams(v), v?.target?.textContent, getLocal("pagination").itemsPerPage)
                    }}
                >{+currentPage + 2}

                </Button> : null}

                {totalPages > currentPage + 1 ? <div>...</div> : null}

                {totalPages > currentPage + 1 ?
                    (
                        <Tooltip
                            tooltipText={local?.totalPages ?? totalPages}
                            right={"-10px"}
                        >
                            <Button
                                defaultButton
                                className='page'
                                onClick={() => {
                                    productsfetchData(null, {}, totalPages, getLocal("pagination").itemsPerPage)
                                }}
                            >{">"}</Button>
                        </Tooltip>
                    )

                    : null}
            </div>
        </div>
    )
}

export default Pagination