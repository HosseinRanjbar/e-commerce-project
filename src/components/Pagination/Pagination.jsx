import React, { useContext, useMemo } from 'react'
import './styles/Pagination.css'
import Button from '../Button/Button'
import { ProductsContext } from '../../pages/Home/context/ProductsContext'
import Loading from '../Loading/Loading'
import { getLocal, setLocal } from '../../utils/common'
import Tooltip from '../Tooltip/Tooltip'

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

    return (
        <div className='pagination-container'>
            {productsLoading && <Loading />}

            <div className='page-container'>
                {currentPage > 2 ? <Button
                    defaultButton
                    className='page'
                    onClick={() => {
                        const local = getLocal("pagination")
                        console.log(local, "local");
                        productsfetchData(null, {}, 1, local?.itemsPerPage)
                    }}

                >{"<"}
                </Button> : null}

                {currentPage > 2 ? <div>...</div> : null}

                {currentPage > 2 ? <Button
                    defaultButton
                    className='page'
                    onClick={(e) => {
                        const local = getLocal("pagination")
                        console.log(local, "local");

                        productsfetchData(null, {}, e.target.innerText, local?.itemsPerPage)

                    }}

                >{+currentPage - 2}
                </Button> : null}

                {currentPage > 1 ? <Button
                    defaultButton
                    className='page'
                    onClick={(e) => {
                        const local = getLocal("pagination")
                        console.log(local, "local");
                        productsfetchData(null, {}, e.target.innerText, local?.itemsPerPage)
                    }}

                >{+currentPage - 1}
                </Button> : null}

                {!isNaN(currentPage) && <Button
                    defaultButton
                    className='page current-page'
                    onClick={(e) => {
                        const local = getLocal("pagination")
                        console.log(local, "local");
                        productsfetchData(null, {}, e.target.innerText, local?.itemsPerPage)
                    }}

                >{Number(currentPage)}
                </Button>}

                {totalPages > currentPage ? <Button
                    defaultButton
                    className='page'
                    onClick={(e) => {
                        const local = getLocal("pagination")
                        console.log(local, "local");
                        productsfetchData(null, {}, e.target.innerText, local?.itemsPerPage)
                    }}

                >{+currentPage + 1}
                </Button> : null}

                {totalPages > currentPage + 1 ? <Button
                    defaultButton
                    className='page'
                    onClick={(e) => {
                        const local = getLocal("pagination")
                        console.log(local, "local");
                        productsfetchData(null, {}, e.target.innerText, local?.itemsPerPage)
                    }}
                >{+currentPage + 2}

                </Button> : null}

                {totalPages > currentPage + 1 ? <div>...</div> : null}

                {totalPages > currentPage + 1 ?
                    (
                        <Tooltip
                            tooltipText={local?.totalPages}
                            right={"-10px"}
                        >
                            <Button
                                defaultButton
                                className='page'
                                onClick={() => {
                                    const local = getLocal("pagination")
                                    console.log(local, "local");
                                    productsfetchData(null, {}, totalPages, local?.itemsPerPage)
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