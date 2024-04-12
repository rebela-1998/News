import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import './Navbar.css'
import { fetchSearch } from '../Store/Slices/SearchSlice'

const Navbar = () => {
    const [toggleSearch, setToggleSearch]=useState(false);
    const [searchItm,setSearchItm]=useState('');
    const dispatch=useDispatch();

    const handleKeyPress=(e)=>{
       if(e.key==='Enter' || e.keyCode===13){
        dispatch(fetchSearch(searchItm))
       }
    }

    return (
        <>
        <div className='navbar'>
            <ul className='index'>
                <li className='index-page'><NavLink className='index-link' to='/general'>General</NavLink></li>
                <li className='index-page'><NavLink className='index-link' to='/health'>Health</NavLink></li>
                <li className='index-page'><NavLink className='index-link' to='/sports'>Sports</NavLink></li>
                <li className='index-page'><NavLink className='index-link' to='/science'>Science</NavLink></li>
                <li className='index-page'><NavLink className='index-link' to='/business'>Business</NavLink></li>
                <li className='index-page'><NavLink className='index-link' to='/entertainment'>Entertainment</NavLink></li>
            </ul>
            {toggleSearch && <input className='searchBox' id='searchBox' placeholder='Enter any keyword' onChange={(e)=>setSearchItm(e.target.value)} onKeyDown={handleKeyPress}/>}
            <button className='search' onClick={()=>setToggleSearch(!toggleSearch)}><span className="material-symbols-outlined" id='search-icon'>search</span></button>
        </div>
        </>
    )
}

export default Navbar
