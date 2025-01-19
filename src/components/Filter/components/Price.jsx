import React, { useRef, useState } from 'react'
import '../styles/Price.css'
import { useContext } from 'react'
import { ProductsContext } from '../../../pages/Home/context/ProductsContext'
import Tooltip from '../../Tooltip/Tooltip'
import Button from '../../Button'

const Price = () => {

    const [minValue, setMinValue] = useState(250)
    const [maxValue, setMaxValue] = useState(750)

    const { setProductsDataValue, productsData } = useContext(ProductsContext)

    const onChangeHandler = (e, type) => {
        if (type === "min") {
            setMinValue(Number(e?.target?.value))
        } else if (type === "max") {
            setMaxValue(Number(e?.target?.value))

        }

    }

    const buttonClickHandler = (buttonType, changeType) => {
        if (buttonType === "min") {
            if (changeType === "minus") {
                setMinValue(prev => {
                    if (prev < 10) return 0
                    return Number(prev) - 10
                })
            } else {
                setMinValue(prev => {
                    if (prev >= 500) return 500
                    return Number(prev) + 10
                })
            }
        } else {
            if (changeType === "minus") {
                setMaxValue(prev => {
                    if (prev <= 500) return 500
                    return Number(prev) - 10
                })
            } else {
                setMaxValue(prev => {
                    if (prev >= 1_000) return 1_000
                    return Number(prev) + 10
                })
            }

        }
    }

    return (
        <div className='price-container'>

            <h3 className="price-title">price</h3>
            <div className="price-range">
                <input
                    type="range"
                    min={0}
                    max={500}
                    value={minValue}
                    className='price-slider min-range'
                    onChange={(e) => onChangeHandler(e, "min")}
                />
                <input
                    type="range"
                    min={500}
                    max={1_000}
                    value={maxValue}
                    className='price-slider max-range'
                    onChange={(e) => onChangeHandler(e, "max")}
                />
                <div className='range-filler' style={{ left: (minValue * 100 / 5_00), right: 220 - (maxValue * 100 / 500) }}></div>
            </div>

            <div className="price-range-show-value">

                <div className='show-value-container'>

                    <input
                        min={0}
                        max={5_000}
                        step={10}
                        type="number"
                        className='from-price'
                        value={minValue}
                        onChange={() => { }}
                    />
                    <div className="show-value-buttons">

                        <Button
                            defaultButton
                            className="action-value-buttons"
                            onClick={() => buttonClickHandler("min", "minus")}

                        >
                            -
                        </Button>
                        <Button
                            defaultButton
                            className="action-value-buttons"
                            onClick={() => buttonClickHandler("min", "plus")}

                        >
                            +
                        </Button>
                    </div>
                </div>
                <span> - </span>
                <div className='show-value-container'>

                    <input
                        min={5_000}
                        max={10_000}
                        step={10}
                        type="number"
                        className='to-price'
                        value={maxValue}
                        onChange={() => { }}
                    />

                    <div className="show-value-buttons">

                        <Button
                            defaultButton
                            className="action-value-buttons"
                            onClick={() => buttonClickHandler("max", "minus")}
                        >
                            -
                        </Button>
                        <Button
                            defaultButton
                            className="action-value-buttons"
                            onClick={() => buttonClickHandler("max", "plus")}

                        >
                            +
                        </Button>
                    </div>

                </div>
            </div>

            <Tooltip
                tooltipText="just this page items will be filtered"
                right={10}
                top={-50}
            >

                <Button
                    color='red'
                    className='apply-filter-button'
                    onClick={() => {
                        setProductsDataValue(productsData?.products?.filter((item) => {
                            return minValue < item?.price && item?.price < maxValue
                        }))
                    }}
                >
                    Apply filter
                </Button>
            </Tooltip>
        </div>
    )
}

export default Price