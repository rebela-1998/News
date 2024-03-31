import React from 'react'
import './NewsItem.css'
import { NavLink } from 'react-router-dom'

const NewsItem = (props) => {
//   console.log(title,desc,author,link,imgurl,datetime)
  return (
    <>
            <NavLink className='story-link' to={`${props.link}`}>
            <img className='thumbnail' src={`${props.imgurl}`} alt='news thumbnail'/>
            <h3 className='title'>{props.title}</h3>
            <p className='intro'>{props.desc}</p>
            <p className='author'>By {props.author}</p>
            <p className='time'>published at {props.dateTime}</p>
            </NavLink>
    </>
  )
}

export default NewsItem
