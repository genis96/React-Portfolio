import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Home/HomeButton.css"

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn-large'];

export const HomeButton = ({
    children,
    type,
    onClick,
    buttonStyling,
    buttonSize
}) => {
    const checkBtnStyle = STYLES.includes(buttonStyling) ? buttonStyling : STYLES[0];
    const checkBtnSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to="/Technologies">
            <button onClick={onclick} type={type} className={`btn ${checkBtnStyle} ${checkBtnSize}`}>
                {children}
            </button>
        </Link>
    )
}