import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './SearchItem.css'

const SearchItem = () => {

    const items = useSelector(state => state.search)
    
    return (
        <div className='search-page'>
            {items.length === 0 ?
                <h1 className='no-result'>No items found related to your search</h1>
                :
                <div className='results'>
                    <h1 className='search-keyword'>Showing all results</h1>
                    <div className='search-items'>
                        {items.map(itm =>
                            <NavLink className='storyLink' key={itm.url} to={itm.url}>
                                <img className='story-img' src={itm.urlToImage} alt='news thumbnail' />
                                <h3 className='story-title'>{itm.title}</h3>
                                <p className='story-intro'>{itm.description}</p>
                                <p className='story-author'>By {itm.author}</p>
                                <p className='story-time'>published at {itm.publishedAt}</p>
                            </NavLink>
                        )}
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchItem
