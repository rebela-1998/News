import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className='header-items'>
            <div className='location-date-time'>
            </div>
            <div className='logo'>
                <NavLink to='/' className='home-link'>
                    <h1 className='logo-text'>News</h1>
                </NavLink>
            </div>
            <div className='login'>
                <button href='/login' className='login-btn'>Log In</button>
            </div>
        </div>
    )
}

export default Header
