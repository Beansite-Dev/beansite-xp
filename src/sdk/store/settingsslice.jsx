import { createSlice } from '@reduxjs/toolkit';
import { getBase64 } from '../modules/lib';
export const settingsSlice=createSlice({
  name: 'settings',
  initialState: {
    value:JSON.parse(localStorage.getItem("mbxpSettings"))?
    JSON.parse(localStorage.getItem("mbxpSettings")):{
        theme:"classic",
        safeGraphics:false,
        backgroundImage: null,
        backgroundFit: "cover",
        customCss:"",
        experimentalMode:false,
    },
  },
  reducers: {
    setSettings:(state,action)=>{
      state.value=action.payload;
    },
    setCustomCss:(state,action)=>{
      state.value.customCss=action.payload;
    },
    setTheme:(state,action)=>{
        console.log(`setting theme to "${action.payload}"`);
        state.value.theme=action.payload;
        console.log(state.value);
    },
    setSafeGraphics:(state,action)=>{
        console.log(`setting safeGraphics to "${action.payload}"`);
        state.value.safeGraphics=action.payload;
        // switch(state.value.safeGraphics){
            // case true:document.body.classList.add("SafeGraphics");break;
            // default:document.body.classList.remove("SafeGraphics");
        // }
    },
    setBackground:(state,action)=>{
      state.value.backgroundImage=action.payload;
      // document.getElementById("bxpgui").style.backgroundImage=`url("${action.payload}")`;
    },
    setBackgroundFit:(state,action)=>{
      state.value.backgroundFit=action.payload;
      // document.getElementById("bxpgui")
        // .style.objectFit=`${action.payload}`;
    },
    setExperimentalMode:(state,action)=>{
      state.value.experimentalMode=action.payload;
      // document.getElementById("bxpgui")
        // .style.objectFit=`${action.payload}`;
    },
  },
});
export const {
  setTheme,
  setSafeGraphics,
  setBackground,
  setBackgroundFit,
  setSettings,
  setCustomCss,
  setExperimentalMode,
}=settingsSlice.actions;
export default settingsSlice.reducer;