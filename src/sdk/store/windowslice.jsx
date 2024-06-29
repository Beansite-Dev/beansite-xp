import { createSlice } from '@reduxjs/toolkit'
export const windowSlice=createSlice({
  name: 'windows',
  initialState: {
    value: {},
  },
  reducers: {
    createWindow:(state,action)=>{
      state.value=Object.assign(
        {[action.payload.win_id]:action.payload.windata},state.value)},
    destroyWindow:(state,action)=>{
      delete state.value[action.payload];},
    updateWindow:(state,action)=>{
      state.value=Object.assign(
        {[action.payload.win_id]:action.payload.windata},state.value)},
  },
})
export const {createWindow,updateWindow,destroyWindow}=windowSlice.actions;
export default windowSlice.reducer;