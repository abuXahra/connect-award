import React from 'react'
import { ButtonStyled } from './style/Button.styled'

const Button = ({ buttonUrl, buttonText }) => {

    return <ButtonStyled variant="outline" onclick={buttonUrl} type="button">{buttonText}</ButtonStyled>

    // return <button style={buttonStyle} onclick={buttonUrl}></button>

}

export default Button