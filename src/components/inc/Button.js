import React from 'react'

const Button = ({ buttonUrl, buttonText }) => {
    const buttonStyle = {
        backgroundColor: "#27053b",
        padding: "15px 40px",
        color: "white",
        border: "none",
        borderRadius: "4px"
    }

    return <button style={buttonStyle} onclick={buttonUrl} type="button">{buttonText}</button>



}

export default Button