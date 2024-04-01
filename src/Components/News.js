import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apikey from '../Api-key'
import NewsItem from './NewsItem'
import './NewsItem.css'
import Loading from './Loading'
import ErrorPage from './ErrorPage'


const News = (props) => {

    const [stories,setStories]=useState([])
    const [page,setPage]=useState(1)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)

    const handleInfiniteScroll=async()=>{
        try{
           if(( window.innerHeight+document.documentElement.scrollTop+1>=document.documentElement.scrollHeight)){
            setPage((prev)=>(prev+1))
           }
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        setLoading(true)
        const fetchdata=async()=>{
            try{
                const res=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apikey}&page=${page}`)
                const resData=res.data.articles   
                setLoading(false)            
                setStories((prev)=>[...prev, ...resData])
            }
            catch(error){
                setError(true)
                console.log('getting error while fetching data'+error);

            }
        }
        fetchdata()},[page,props])
    

    useEffect(()=>{
        window.addEventListener("scroll",handleInfiniteScroll)
        return ()=>{window.removeEventListener("scroll",handleInfiniteScroll)}
    },[])

    return (
        <>
          {error===true?
            <ErrorPage/>
            :
            <div className='datas'>
            {stories.map((article) => {
                return (<div className='items' key={article.url}>
                        <NewsItem title={article.title?article.title.slice(0,45):""} desc={article.description?article.description.slice(0,88):""} 
                           author={article.author==null?'anonymous':article.author} link={article.url} imgurl={article.urlToImage==null?'/asset/favicon_io (1)/favicon-16x16.png':article.urlToImage}
                           dateTime={article.publishedAt}/>
                        </div>   )
               })
            }
            {loading && <Loading/>}
            </div>
              }
        </>
    )
}

export default News
