import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchBypostId =createAsyncThunk('fetchBypostId', async () => {
       const respons= await axios.get('https://jsonplaceholder.typicode.com/posts');
      //  const respons.data.title;
      const titleGet = respons.data[Math.random().toString()].title;
      // const titleGet = respons[Math.floor(Math.random() * respons.length)];
      //console.log(titleGet)
       return titleGet;
         }
         
         )
         
export const titleSlice = createSlice({
name:'title',
initialState:{
 title: 'Fluxy System',
},
reducers:{
AboutTitle:(state, action) => {
    state.title=action.payload;
},
},
extraReducers: {
   [fetchBypostId.fulfilled]:(state, action) =>{
    state.title = action.payload;
   },
     [fetchBypostId.pending]: (state, action) =>{
       state.title = 'loading'
  },
      [fetchBypostId.rejected]:(state, action) =>{ 
        state.title = 'error'
  },
},
})
export const {AboutTitle} =titleSlice.actions
export default titleSlice.reducer