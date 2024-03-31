import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apikey from '../Api-key'
import NewsItem from './NewsItem'
import './NewsItem.css'


const News = () => {

    const [stories,setStories]=useState([])

   useEffect(()=>
     {const fetchdata=async()=>
      {
        try{
            const res=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${apikey}`)
            const resData=res.data
            
            setStories(resData.articles)
        }
        catch(error){
            console.log('getting error while fetching data');
        }
    }
     fetchdata();
     
     },[])


    return (
        <>
            <div className='datas'>
            {stories?.map((article) => {
                return (<div className='items' key={article.url}>
                        <NewsItem title={article.title?article.title.slice(0,45):""} desc={article.description?article.description.slice(0,88):""} 
                           author={article.author==null?'anonymous':article.author} link={article.url} imgurl={article.urlToImage==null?'/asset/favicon_io (1)/favicon-16x16.png':article.urlToImage}
                           dateTime={article.publishedAt}/>
                        </div>   )
               })
            }
            </div>
        </>
    )
}

export default News
