import React, { useCallback, useReducer } from 'react'
import '../styles/Price.css'
import Button from '../../Button/Button'
const Price = () => {

    const reducer = useCallback((state, action) => {

        switch (action.type) {
            case "MIN":
                return { ...state, min: action.payload }
            case "MAX":
                return { ...state, max: action.payload }

            default:
                break;
        }

    }, [])

    const [state, dispatch] = useReducer(reducer, { min: 2_500, max: 7_500 })
    return (
        <div className='price-container'>
            <h3 className="price-title">price</h3>
            <div className="price-range">
                <input
                    type="range"
                    value={state.min}
                    min={0}
                    max={5_000}
                    onChange={(e) => dispatch({ type: "MIN", payload: e.target.value })}
                    step={100}
                    className='price-slider min-range'
                />
                <input
                    type="range"
                    value={state.max}
                    min={5_000}
                    max={10_000}
                    onChange={(e) => dispatch({ type: "MAX", payload: e.target.value })}
                    step={100}
                    className='price-slider max-range'
                />
            </div>

            <div className="price-range-show-value">

                <div className='show-value-container'>

                    <input
                        min={0}
                        max={5_000}
                        step={100}
                        type="number"
                        className='from-price'
                        value={Math.abs(state.min - 5_000)}
                        onChange={(e) => dispatch({ type: "MIN", payload: e.target.value })}
                    />
                    <div className="show-value-buttons">

                        <Button
                            defaultButton
                            className="action-value-buttons"

                        >
                            -
                        </Button>
                        <Button
                            defaultButton
                            className="action-value-buttons"

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
                        step={100}
                        type="number"
                        className='to-price'
                        value={state.max}
                        onChange={(e) => dispatch({ type: "MAX", payload: e.target.value })}
                    />

                    <div className="show-value-buttons">

                        <Button
                            defaultButton
                            className="action-value-buttons"

                        >
                            -
                        </Button>
                        <Button
                            defaultButton
                            className="action-value-buttons"
                        >
                            +
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Price