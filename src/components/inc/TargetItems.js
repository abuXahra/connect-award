import React from 'react'

function TargetItems({ targetImage, targetText }) {


    const target = {
        border: "2px solid #a582b9da",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
    }

    const targetImgStyle = {
        heigh: "200px",
        width: "200px",
    }

    return (
        <div className='col-md-3 text-center mb-3 mt-3'>
            <div style={target}>
                <img style={targetImgStyle} src={targetImage} alt="" srcset="" />
                <h5>{targetText}</h5>
            </div>
        </div>
    )
}

export default TargetItems
