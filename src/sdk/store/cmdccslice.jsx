import { createSlice } from '@reduxjs/toolkit'
export const cmdccSlice=createSlice({
  name: 'cmd_custom_commands',
  initialState: {
    value: [],
  },
  reducers: {
    createCommand:(state,action)=>{
      state.value=[...state.value,{
        "name":action.payload.name,
        "callback":action.payload.callback,
      }]
      // console.log(state.value);
    },
  },
});
export const {createCommand}=cmdccSlice.actions;
export default cmdccSlice.reducer;