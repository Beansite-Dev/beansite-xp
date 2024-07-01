import { createSlice } from '@reduxjs/toolkit'
export const tbiSlice=createSlice({
  name: 'tbi',
  initialState: {
    value: {},
  },
  reducers: {
    createTBI:(state,action)=>{
      state.value=Object.assign(
        {[action.payload.win_id]:action.payload.windata},state.value)},
    destoryTBI:(state,action)=>{
      delete state.value[action.payload];},
    updateTBI:(state,action)=>{
      state.value=Object.assign(
        {[action.payload.win_id]:action.payload.windata},state.value)},
  },
})
export const {createTBI,destoryTBI,updateTBI}=tbiSlice.actions;
export default tbiSlice.reducer;