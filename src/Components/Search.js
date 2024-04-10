import axios from 'axios'
import apikey from '../Api-key'

export const search =async() => {
    const res=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`);
    return (res.data.articles);
}





