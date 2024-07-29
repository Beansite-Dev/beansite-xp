import { createSlice } from '@reduxjs/toolkit'
export const settingsSlice=createSlice({
  name: 'settings',
  initialState: {
    value:{
        theme:"classic",
        safeGraphics:false,
        backgroundImage: `/asset/bg.png`,
        backgroundFit: "cover",
    },
  },
  reducers: {
    setTheme:(state,action)=>{
        console.log(`setting theme to "${action.payload}"`);
        state.value.theme=action.payload;
        console.log(state.value);
        document.getElementById("theme")
          .setAttribute("href",`/themes/style/${action.payload}.css`);
        var theme;
        switch(action.payload){
          case "dark":theme="dark_icons";break;
          case "classic":default:theme="xp";break;
        }
        for(let i=0;i<document.getElementsByClassName("max").length;i++){
          // console.log(document.getElementsByClassName("max")[i]); //debug
          document.getElementsByClassName("max")[i].setAttribute("style",
            `background-image: url("/icons/${theme}/Maximize.png");`)
        }
        // special callbacks
        switch(action.payload){
          case "dark":break;
          default:null;
        }
    },
    setSafeGraphics:(state,action)=>{
        console.log(`setting safeGraphics to "${action.payload}"`);
        state.value.safeGraphics=action.payload;
        document.getElementById("root").classList.toggle("SafeGraphics");
        // switch(state.value.safeGraphics){
            // case true:document.body.classList.add("SafeGraphics");break;
            // default:document.body.classList.remove("SafeGraphics");
        // }
    },
    setBackground:(state,action)=>{
      console.log(action.payload);
      state.value.backgroundImage=action.payload;
      var fileReader=new FileReader();
      fileReader.onload=()=> {
        document.getElementById("bxpgui")
          .style.backgroundImage=`url(${fileReader.result})`;};
      fileReader.readAsDataURL(action.payload);
      // document.getElementById("bxpgui").style.backgroundImage=`url("${action.payload}")`;
    },
    setBackgroundFit:(state,action)=>{
      state.value.backgroundFit=action.payload;
      document.getElementById("bxpgui")
        .style.backgroundSize=`${action.payload}`;
      // document.getElementById("bxpgui")
        // .style.objectFit=`${action.payload}`;
    },
  },
});
export const {
  setTheme,
  setSafeGraphics,
  setBackground,
  setBackgroundFit
}=settingsSlice.actions;
export default settingsSlice.reducer;