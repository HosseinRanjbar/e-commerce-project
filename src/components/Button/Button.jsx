import classNames from 'classnames'
import React from 'react'
import './styles/Button.css'

const Button = ({
    children,
    color = "primary",
    borderRadius,
    className
}) => {
    return (
        <button
            className={classNames(className, "btn", { "btn-primary": color === "primary", "btn-red": color === "red", "btn-warning": color === "warning" })}
            style={{ borderRadius }}
        >
            {children}
        </button>
    )
}

export default Button