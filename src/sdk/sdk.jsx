import { Component, createRef, useState, createContext, useEffect, useRef } from "react";
// import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import store from './store/store';
import { setUsername } from "./store/userdataslice";
import { Window, WinUtils } from "./modules/Window";
import { generateId, timeout } from "./modules/lib";
// import bsod from "./modules/BSoD";
import { Provider } from 'react-redux';
import "./stylesheets/style/core.css";
import { Taskbar, TaskbarIcon, StartMenu } from "./modules/Explorer";
import NotificationSystem, { Notification } from "./modules/Notification";
import { createNotification } from "./store/notificationslice";
import html2canvas from "html2canvas";
import { Explorer } from "./modules/Explorer"
import BeanShell from './modules/Beanshell';
import Settings from './modules/Settings';
import ClosedBetaLogin from "./modules/closedBetaLogin";
import BeanXPRouter from "./router";
const BeansiteXP=({ 
  startMenuShortcuts=[],
  children, 
  config={
    "debugMode": location.hostname=="localhost"?true:false,
    "closedBeta": true,
    "beansitePlugins":[], // for future feature
  }
})=>{
  const windows=useSelector((state)=>state.windows.value);
  const userdata=useSelector((state)=>state.userdata);
  const tbi=useSelector((state)=>state.tbi.value);
  const dispatch=useDispatch();
  const Icon=document.getElementById("icon");
  document.title="Beansite XP";
  Icon.href="/assets/beanxp_logo.png";
  useEffect(()=>{
    dispatch(setUsername("Guest"));
    if(globalThis.IN_DESKTOP_ENV){
      console.log("running on desktop env");
    }
    if(config.debugMode&&location.hostname=="localhost"){
      console.log("[SDK] Debug mode is enabled by default in localhost");
    }
    window.addEventListener("keydown",(e)=>{
      if(e.repeat)return;
      // if (e.ctrlKey && e.key === 's') {
        // e.preventDefault();
        // html2canvas(document.body,{
          // backgroundColor:null}).then(canvas=>{
          // // document.body.appendChild(canvas);
          // var image=canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
          // var link=document.createElement('a');
          // var currentDate=new Date();
          // link.setAttribute('download',`screenshot-${currentDate.getMonth()+1}-${currentDate.getDate()}-${currentDate.getFullYear()}.png`);
          // link.setAttribute('href',image);
          // link.click();
        // });
      // }
    })
  },[]);
  return (<>
    {config.closedBeta&&!config.debugMode?<ClosedBetaLogin/>:null}
    <div id="bxpgui">
      <div id="winWrapper">
        {children}
        <Explorer />
        <BeanShell />
        <Settings />
        <Window 
          size={{
            "height": "38vmin",
            "width": "58vmin"}} 
          pos={{
            "x":["left","30vmin"],
            "y":["top","30vmin"],}}
          includeTitlebarOptions={{
            "min": true,
            "max": true,
            "close": true,}}
          id="paint"
          title="Paint"
          icon="/icons/xp/Paint.png"
          closed>
            <iframe src="https://jspaint.app/"  />
        </Window>
      {config.debugMode?<>
        <Window
          size={{
            "height": "38vmin",
            "width": "58vmin"}} 
          pos={{
            "x":["left","5vmin"],
            "y":["top","calc(100% - (5vmin + 48px + 38vmin))"],}}
          includeTitlebarOptions={{
            "min": true,
            "max": true,
            "close": true,}}
          id="debugMenu"
          title="Debug Menu"
          icon="/icons/xp/Services.png"
          closed
          markdownSource={`# Debug Menu
---
this menu contains debug options to test beansites functionality

---
### All Debug Tools:`}>
            <button 
              className='button1'
              onClick={()=>
                dispatch(createNotification({
                  "title": generateId(5),
                  "id": generateId(10),
                }))}>createNotification</button>
        </Window>
      </>:null}
      </div>
      <div id="maximizePreview"></div>
      <StartMenu shortcuts={startMenuShortcuts} />
      <NotificationSystem />
      <Taskbar>
        {Object.keys(tbi).map((win_id)=>
          <TaskbarIcon 
            key={win_id} 
            title={tbi[win_id].title} 
            id={`${win_id}_tbs`} 
            eid={tbi[win_id].eid} 
            icon={tbi[win_id].icon} />)}
      </Taskbar>
    </div>
  </>);
}
export { createNotification } from "./store/notificationslice";
export { generateId, timeout } from "./modules/lib";
export { Window, WinUtils, waitForElm } from "./modules/Window";
export { 
  InitializeGoogleAnalytics,
  TrackGoogleAnalyticsEvent, 
} from "./modules/Analytics";
export { BeanXPRouter };
export default BeansiteXP;