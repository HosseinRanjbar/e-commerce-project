import React from 'react'
import ReactDOM from 'react-dom'
import './assets/SnackBarProvider.css'
const SnackBarProvider = ({ children }) => {
    return (
        <>
            {children}
            <div id='snackbar-wrapper'></div>
        </>
    )
}
ReactDOM.createPortal(<SnackBarProvider />, document.getElementById("root"))

export default SnackBarProvider