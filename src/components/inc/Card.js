import React from 'react'
import { CardContainer } from './style/Card.Style'

function Card({ voteCategories }) {
    const cardInnerStyle = {
        width: "240px",
        height: "auto",
        background: "white",
        borderRadius: "10px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        color: "black",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: "15px 15px"
    }


    const CardContainerStyled = {
        display: "flex",
        flexWrap: "wrap",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center"
    }

    const titleStyle = {
        padding: "10px 0px",
        fontSize: "13px",
    }


    const arrowIconStyle = {
        marginTop: "10px",
        width: "100%",
        justifyContent: "flex-end",
        display: "flex"
    }

    return (
        <div style={CardContainerStyled}>
            {
                voteCategories.map((voteCategory) => (
                    <div style={cardInnerStyle}>
                        <div>{voteCategory.voteIcon}</div>
                        <div style={titleStyle}> <b>{voteCategory.title}</b> </div>
                        <div style={arrowIconStyle}>{voteCategory.arrowIcon}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Card
