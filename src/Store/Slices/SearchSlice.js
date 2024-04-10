import {createSlice} from "@reduxjs/toolkit";
import {search} from "../../Components/Search";

const items=await search();
console.log(items);

const initialState=[]

const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers:{
        showSearch(state,action){
         for(let i of items){
          if(i.content!==null && i.content.includes(action.payload))
          state.push(i)
         }
        }
    }
});


export default SearchSlice
export const {showSearch}=SearchSlice.actions
