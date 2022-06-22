import React from 'react'

function TalentItems({ talentImage, talentText, talentParagraph }) {


    const talent = {
        border: "solid 1px #cccccc",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: "5px"
    }

    const talentImgStyle = {
        heigh: "200px",
        width: "200px",
    }

    return (
        <div className='col-md-4 text-center mb-3 mt-3'>
            <div style={talent}>
                <img style={talentImgStyle} src={talentImage} alt="" srcset="" />
                <h5 style={{ fontWeight: "bold", color: "#27053B" }}>{talentText}</h5>
                <p>{talentParagraph}</p>
            </div>
        </div>
    )
}


export default TalentItems
