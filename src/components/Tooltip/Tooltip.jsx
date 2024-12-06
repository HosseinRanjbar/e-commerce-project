import React, { useState } from 'react'
import './styles/Tooltip.css'

const Tooltip = ({
    children,
    tooltipText,
    right
}) => {

    return (
        <div className='tooltip-container'>

            {children}

            <div
                className='tooltip-text-container'
                style={{ right }}
            >
                {tooltipText}
                <div className='arrow-top'></div>
                <div className='arrow-bottom'></div>
            </div>
        </div>
    )
}

export default Tooltip