import { createSlice } from '@reduxjs/toolkit'
export const notiSlice=createSlice({
  name: 'notifications',
  initialState: {
    value: {},
  },
  reducers: {
    createNotification:(state,action)=>{
      state.value=Object.assign(
        {[action.payload.title]:{
          "id":action.payload.id,}},state.value);
      // console.log(state.value);
    },
  },
});
export const {createNotification}=notiSlice.actions;
export default notiSlice.reducer;