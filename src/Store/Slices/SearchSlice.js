import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
const baseUrl = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`;

const initialState = {
    stories: [],
    totalResult: 0,
    error: ''
};

export const fetchdata = createAsyncThunk('search/fetchData', async ({page,category,pagesize},thunkAPI) => {
        const res = await axios.get(`${baseUrl}&category=${category}&pageSize=9&page=${page}`)
        return res.data;
        // console.log('callled'+res.data.articles);
    }
)

export const fetchSearch = createAsyncThunk('search/fetchSearch', async (keyword) => {
        const res = await axios.get(`${baseUrl}&q=${keyword}`)
        return res.data;
    }
)

const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        // showItems(state, action) {
        //     state.stories.push(action.payload)
        // },
        removeSearch(state, action) {
            state.stories.length = 0
        },
        removeError(state,action){
            state.error=''
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchdata.fulfilled, (state, action) => {
                return { ...state, stories: action.payload.articles,totalResult: action.payload.totalResults };
            })
            .addCase(fetchdata.rejected, (state, action) => {
                return { error: action.payload }
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                return { ...state,stories: action.payload.articles, totalResult: action.payload.totalResults }
            })
            .addCase(fetchSearch.rejected, (state, action) => {
                return { error: action.payload.message }
            })
    }
});


export const getfetchdata = (state) => state.search.stories
export const getTotalResult=(state)=>state.search.totalResult
export const getError = (state) => state.search.error
export default SearchSlice
export const { removeSearch,removeError } = SearchSlice.actions
