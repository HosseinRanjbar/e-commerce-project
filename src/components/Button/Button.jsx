import classNames from 'classnames'
import React from 'react'
import './styles/Button.css'

const Button = ({
    children,
    color = "primary",
    borderRadius,
    className,
    defaultButton,
    cursor = "pointer",
    style,
    ...res
}) => {
    return (
        <button
            className={!defaultButton ? classNames(className, "btn", { "btn-primary": color === "primary", "btn-red": color === "red", "btn-warning": color === "warning" }) : className}
            style={{ borderRadius, cursor, ...style }}
            {...res}
        >
            {children}
        </button>
    )
}

export default Button