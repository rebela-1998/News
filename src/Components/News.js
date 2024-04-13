import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import './NewsItem.css'
import Loading from './Loading'
import ErrorPage from './ErrorPage'
import { useSelector, useDispatch } from 'react-redux'
// import SearchItem from './SearchItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchdata, getError, getTotalResult, getfetchdata, removeSearch ,removeError} from '../Store/Slices/SearchSlice'


const News = (props) => {

    const [page, setPage] = useState(1)
    // const [loading, setLoading] = useState(false)
    const [pagesize, setPagesize] = useState(9)
    const dispatch = useDispatch()

    const stories = useSelector(getfetchdata)
    const totalResult = useSelector(getTotalResult)
    const error = useSelector(getError)

    const { category } = props

    // const handleInfiniteScroll = () => {
    //     if ((window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) && (pagesize <= totalResult)) {
    //         setPage(prevpage => prevpage + 1);
    //         setPagesize(prevsize => prevsize + 9)
    //     }
    // }

    const fetchMoredata=()=>{
        setPage(prev=>prev+1)
        // setPagesize(prev=>prev+9)
    }

    useEffect(() => {
            dispatch(fetchdata({ page, category }))
            return () => {
                dispatch(removeSearch());
                dispatch(removeError());
            };    
            }, [dispatch, page, category])

    // useEffect(() => {
    //     window.addEventListener("scroll", handleInfiniteScroll);
    //     return () => { window.removeEventListener("scroll", handleInfiniteScroll) }
    // })

    console.log(totalResult)
    return (
        <>
            {error !== '' ?
                <ErrorPage />
                :
                <InfiniteScroll
                    dataLength={stories.length} //This is important field to render the next data
                    next={fetchMoredata}
                    hasMore={stories.length!==totalResult}
                    loader={<Loading />}
                    >
                    <div className='datas'>
                        {stories.map((article) => {
                            return (
                                <div className='items' key={article.url}>
                                    <NewsItem title={article.title ? article.title.slice(0, 45) : ""} desc={article.description ? article.description.slice(0, 88) : ""}
                                        author={article.author == null ? 'anonymous' : article.author} link={article.url} imgurl={article.urlToImage == null ? '/asset/favicon_io (1)/favicon-16x16.png' : article.urlToImage}
                                        dateTime={article.publishedAt} />
                                </div>)
                        })
                            // (setLoading(false))
                        }
                        {/* {loading && <Loading />} */}
                    </div>
                </InfiniteScroll>
            }
        </>
    )
}

export default News
