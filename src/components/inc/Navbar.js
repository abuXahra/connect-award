import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'

function Navbar() {

    // const [userStyle, setuserStyle] = useState("");

    // const togglButton = document.getElementById('toggle-button')
    // const navList = document.getElementById('nav-list');

    // togglButton.addEventListener('click', () => {
    //     navList.classList.toggle('active-toggle');
    // })
    return (
        <nav className='navbar'>
            <div className='site-logo'>
                <Link to="/">  <img className='primary-icon' src={Logo} height="70" width={150} alt="" srcset="" /></Link>

            </div>
            <ul className='nav-list' id='nav-list'>
                <li className='list-item '>
                    <Link to="/Categories">Categories</Link>
                </li>
                <li className='list-item '>
                    <Link to="/Past-editions">Past editions</Link>
                </li>
                <li className='list-item '>
                    <Link to="/Future-editions">Future editions</Link>

                </li>
                <li className='list-item '>
                    <Link to="/About-Us">About Us</Link>

                </li>
                <li className='list-item '>
                    <Link to="/Make-a-donation">Make a donation</Link>

                </li>
                <li className='list-item bg-login'>
                    <Link to="/Login">Login</Link>

                </li>
                <li className='list-item bg-signup'>
                    <Link to="/create-account">Create Account</Link>
                </li>
            </ul>
            <div className='menu' id='toggle-button'>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
            </div>
        </nav>

    )
}

export default Navbar


/*

<Route exact path='/' element={<Home />} />

        <Route exact path='/Categories' element={<Categories />} />
        <Route exact path='/Past-editions' element={<PastEditions />} />
        <Route exact path='/Future-editions' element={<FutureEditions />} />
        <Route exact path='/About-Us' element={<AboutUs />} />
        <Route exact path='/Make-a-donation' element={<MakeADonations />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/create-account' element={<Signup />}></Route>
*/


