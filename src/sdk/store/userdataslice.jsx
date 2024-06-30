import { createSlice } from '@reduxjs/toolkit'
export const userdataSlice=createSlice({
  name: 'windows',
  initialState: {
    "username":"",
  },
  reducers: {
    setUsername:(state,action)=>{
      state.username=action.payload;
    }
  },
})
export const {setUsername}=userdataSlice.actions;
export default userdataSlice.reducer;