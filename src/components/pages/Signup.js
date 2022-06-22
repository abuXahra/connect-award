import React from 'react'
import { FcGoogle } from "react-icons/fc"

function CreatAccounts() {
    const mySpacing = {
        height: "20px"
    }
    return (
        <div>
            <section className='signup-section purple-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 text-center mt-5 mb-5">
                            <div style={{ backgroundColor: "white", width: "100%", borderRadius: "3px", padding: "25px", height: "auto" }}>
                                <h5> <b>Time to your favourite Techie, <br />let's make this !</b></h5>
                                <div style={mySpacing}></div>
                                <h6>Create an Account</h6>
                                Have an account? <span style={{ color: "orange" }}>Log in</span>
                                <div style={{ margin: "30px auto", padding: "10px", backgroundColor: "#cccccc59", borderRadius: "4px", border: "solid 1px #cccccc" }}>
                                    <FcGoogle /> <span style={{ fontSize: "12px" }}>Continue with google</span>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", }}>
                                    <hr style={{ width: "40%" }} /> <span style={{ padding: "0 15px" }}>OR</span>  <hr style={{ width: "40%" }} />
                                </div>

                                <form method="POST">
                                    <div class="row row-space">
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">first name</label>
                                                <input class="input--style-4" type="text" name="first_name" />
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">last name</label>
                                                <input class="input--style-4" type="text" name="last_name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-space">
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Birthday</label>
                                                <div class="input-group-icon">
                                                    <input class="input--style-4 js-datepicker" type="text" name="birthday" />
                                                    <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Gender</label>
                                                <div class="p-t-10">
                                                    <label class="radio-container m-r-45">Male
                                                        <input type="radio" checked="checked" name="gender" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                    <label class="radio-container">Female
                                                        <input type="radio" name="gender" />
                                                        <span class="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-space">
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Email</label>
                                                <input class="input--style-4" type="email" name="email" />
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Phone Number</label>
                                                <input class="input--style-4" type="text" name="phone" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input-group">
                                        <label class="label">Subject</label>
                                        <div class="rs-select2 js-select-simple select--no-search">
                                            <select name="subject">
                                                <option disabled="disabled" selected="selected">Choose option</option>
                                                <option>Subject 1</option>
                                                <option>Subject 2</option>
                                                <option>Subject 3</option>
                                            </select>
                                            <div class="select-dropdown"></div>
                                        </div>
                                    </div>
                                    <div class="p-t-15">
                                        <button class="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                                    </div>
                                </form>


                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CreatAccounts