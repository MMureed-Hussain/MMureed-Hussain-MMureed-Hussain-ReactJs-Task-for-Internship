import { createSlice } from "@reduxjs/toolkit";
 

export const bodySlice = createSlice ({
name:'body',
initialState:{
  body: 'System is System',
 },
reducers:{
  AboutBody:(state, action) => {
    state.body=action.payload;
},
},

})
export const {AboutBody} =bodySlice.actions
export default bodySlice.reducer