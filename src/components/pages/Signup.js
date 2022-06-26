import React from 'react'
import { FcGoogle } from "react-icons/fc"

function CreatAccounts() {
    const verticalSpacing = {
        height: "20px"
    }

    const techieStyle = {
        backgroundColor: "white",
        width: "100%",
        borderRadius: "3px",
        padding: "25px",
        height: "auto"
    }

    const techieStyleTwo = {
        backgroundColor: "white",
        width: "40%",
        borderRadius: "3px",
        padding: "25px",
        height: "auto",
        margin: "100px auto",
        textAlign: "center"


    }
    const loginColor = {
        color: "orange"
    }

    const googleContainer = {
        margin: "30px auto",
        padding: "10px",
        backgroundColor: "#cccccc59",
        borderRadius: "4px",
        border: "solid 1px #cccccc",
        textAlign: "center"
    }

    const dividerContainer = { display: "flex", flexDirection: "row", }

    const contWithGoogle = { fontSize: "12px" }

    const hrLeft = { width: "45%" }
    const hrRight = { width: "45%" }

    const inputDivOne = { display: "flex", flexDirection: "row", textAlign: "left" }

    const inputStyle = {
        width: "100%",
        borderRadius: "4px",
        border: "solid 1px #cccccc",
        padding: "5px"
    }


    const horizontalSpacing = {
        width: "10%"
    }

    return (
        <div>
            {/* <section className='signup-section purple-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3.5"></div>
                        <div className="col-md-5 text-center mt-5 mb-5">
                            <div style={techieStyle}>
                                <h5> <b>Time to your favourite Techie, <br />let's make this !</b></h5>
                                <div style={verticalSpacing}></div>
                                <h6>Create an Account</h6>
                                Have an account? <span style={loginColor}>Log in</span>
                                <div style={googleContainer}>
                                    <FcGoogle /> <span style={contWithGoogle}>Continue with google</span>
                                </div>
                                <div style={dividerContainer}>
                                    <hr style={hrLeft} /> <span style={{ padding: "0 15px" }}>OR</span>  <hr style={hrRight} />
                                </div>

                                <form method="POST">
                                    <div style={inputDivOne}>
                                        <div style={{ width: "45%" }}>
                                            <label class="label">First name</label><br />
                                            <input style={inputStyle} type="text" name="" id="" />
                                        </div>
                                        <div style={horizontalSpacing}></div>
                                        <div style={{ width: "45%" }}>
                                            <label class="label">Last name</label><br />
                                            <input style={inputStyle} type="text" name="" id="" />
                                        </div>
                                    </div>
                                    <div style={inputDivTwo}>
                                        <label class="label">Email Address</label><br />
                                        <input style={inputStyle} type="text" name="" id="" />
                                    </div>
                                    <div style={inputDivTwo}>
                                        <label class="label">Phone Number</label><br />
                                        <input style={inputStyle} type="text" name="" id="" />
                                    </div>
                                    <div style={inputDivTwo}>
                                        <label class="label">Setup Password</label><br />
                                        <input style={inputStyle} type="text" name="" id="" />
                                    </div>

                                </form>


                            </div>
                        </div>
                        <div className="col-md-3.5"></div>
                    </div>
                </div>
            </section> */}


            <section className='signup-section purple-bg'>
                <div style={{ display: "flex", position: "relative" }}>

                    <div style={techieStyleTwo}>
                        <h5> <b>Time to your favourite Techie, <br />let's make this !</b></h5>
                        <div style={verticalSpacing}></div>
                        <h6>Create an Account</h6>
                        Have an account? <span style={loginColor}>Log in</span>
                        <div style={googleContainer}>
                            <FcGoogle /> <span style={contWithGoogle}>Continue with google</span>
                        </div>
                        <div style={dividerContainer}>
                            <hr style={hrLeft} /> <span style={{ padding: "0 10px" }}>OR</span>  <hr style={hrRight} />
                        </div>

                        <form method="POST">
                            <div style={inputDivOne}>
                                <div style={{ width: "45%" }}>
                                    <label class="label">First name</label><br />
                                    <input style={inputStyle} type="text" name="" id="" />
                                </div>
                                <div style={horizontalSpacing}></div>
                                <div style={{ width: "45%" }}>
                                    <label class="label">Last name</label><br />
                                    <input style={inputStyle} type="text" name="" id="" />
                                </div>
                            </div>
                            <div style={{ width: "100%", margin: "10px 0" }}>
                                <label class="label">Email Address</label><br />
                                <input style={inputStyle} type="text" name="" id="" />
                            </div>

                            <div style={{ width: "100%", margin: "10px 0" }}>
                                <label class="label">Phone Number</label><br />
                                <input style={inputStyle} type="text" name="" id="" />
                            </div>
                            <div style={{ width: "100%", margin: "10px 0" }}>
                                <label class="label">Set Password</label><br />
                                <input style={inputStyle} type="text" name="" id="" />
                            </div>

                            <div style={{ width: "100%", margin: "10px 0" }}>
                                <label class="label">Gender</label><br />
                                <input type="select" name="" id="" />
                                <select style={inputStyle} name="cars" id="cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>

                        </form>


                    </div>
                </div>
            </section>
        </div>
    )
}

export default CreatAccounts