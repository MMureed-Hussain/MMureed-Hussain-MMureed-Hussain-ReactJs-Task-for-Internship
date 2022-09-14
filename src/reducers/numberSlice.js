import { createSlice} from "@reduxjs/toolkit";
const initialState ={
    value: 0,
}
const numberSlice = createSlice({
  name:'balance',
  initialState,
  reducers:{
    add:(state) => {
        state.value += 10
    },
    sub:(state) => {
         state.value -= 5
    },
    addByAmount:(state , action) => {
       state.value += action.payload
    },
    subByAmount:(state , action) => {
      state.value -= action.payload
    },
  },
})
export const {add,sub,addByAmount,subByAmountd,AboutTitle} = numberSlice.actions
export default numberSlice.reducer