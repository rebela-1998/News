import {configureStore} from '@reduxjs/toolkit'
import SearchSlice from './Slices/SearchSlice'

const  store=configureStore({
    reducer:{
        search: SearchSlice.reducer,
    }
})
export default store
