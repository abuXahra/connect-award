import React from 'react'
import FooterLogo from '../images/footerlogo.png'

function Footer() {

    const mySpacing = {
        height: "20px"
    }
    return (
        <div>
            <section className='target-section purple-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 text-white mt-5 mb-5">
                            <p style={{ fontSize: "13px", color: "orange" }}>About</p>
                            <p style={{ fontSize: "13px" }}>The Connected Magazine</p>
                            <p style={{ fontSize: "13px" }}>Past Editions</p>
                            <p style={{ fontSize: "13px" }}>Celebrated Techies</p>
                        </div>
                        <div className="col-md-2 text-white mt-5 mb-5">
                            <p style={{ fontSize: "13px", color: "orange" }}>Legal</p>
                            <p style={{ fontSize: "13px" }}> Terms of Service</p>
                            <p style={{ fontSize: "13px" }}>Privacy Policy</p>
                        </div>
                        <div className="col-md-2 text-white mt-5 mb-5">
                            <p style={{ fontSize: "13px", color: "orange" }}>Social</p>
                            <p style={{ fontSize: "13px" }}> Linkedln</p>


                        </div>
                        <div className="col-md-2 text-white mt-5 mb-5">
                            <p style={{ fontSize: "13px", color: "orange" }}>Contact</p>
                            <p style={{ fontSize: "13px" }}>+2347057219951</p>
                            <p style={{ fontSize: "13px" }}> Chat on Whatsapp</p>
                            <p style={{ fontSize: "13px" }}> connectedawards@gmail.co</p>
                        </div>
                        <div className="col-md-2">sdsd</div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 text-white">
                            <img style={{ height: "80px", }} src={FooterLogo} alt="" srcset="" />
                            <div style={mySpacing}></div>
                            <p style={{ fontSize: "13px" }}>Celebrating Techies Globally</p>
                        </div>
                        <div className="col-md-6 float-end text-white">
                            <div style={mySpacing}></div>
                            <div style={mySpacing}></div>
                            <div style={mySpacing}></div>
                            <div style={mySpacing}></div>
                            <div style={mySpacing}></div>
                            <p style={{ fontSize: "13px", textAlign: "right" }}>© 2022 The Conected Awards - All rights reserve</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
