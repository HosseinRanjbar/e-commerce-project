import React from 'react'
import './styles/Loading.css'

const Loading = ({ className }) => {
    return (
        <div className={className ? className : "loading-container"}>
            <div className='loading'></div>
        </div>
    )
}

export default Loading