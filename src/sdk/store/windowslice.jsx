import { createSlice } from '@reduxjs/toolkit'
export const windowSlice=createSlice({
  name: 'windows',
  initialState: {
    value: {},
  },
  reducers: {
    createWindow:(state,action)=>{
      // state.value[action.payload.win_id]=action.payload.windata;
      state.value=Object.assign(
        {[action.payload.win_id]:action.payload.windata},state.value)
      // console.log(action.payload);
    },
    destroyWindow:(state,action)=>{
      delete state.value[action.payload];
    }
  },
})
export const {createWindow,destroyWindow}=windowSlice.actions;
export default windowSlice.reducer;