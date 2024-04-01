import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='index'>
                <li className='index-page'><NavLink className='index-link' to='/general'>General</NavLink></li>
                <li className='index-page'><NavLink className='index-link' to='/health'>Health</NavLink></li>
                <li className='index-page'><NavLink className='index-link' to='/sports'>Sports</NavLink></li>
                <li className='index-page'><NavLink className='index-link' to='/science'>Science</NavLink></li>
                <li className='index-page'><NavLink className='index-link' to='/business'>Business</NavLink></li>
                <li className='index-page'><NavLink className='index-link' to='/entertainment'>Entertainment</NavLink></li>
            </ul>
            <NavLink className='search'><span className="material-symbols-outlined" id='search-icon'>search</span></NavLink>
        </div>
    )
}

export default Navbar
