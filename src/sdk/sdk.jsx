import { Component, createRef, useState, createContext, useEffect } from "react";
// import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import store from './store/store';
import { setUsername } from "./store/userdataslice";
export { Window, WinUtils, waitForElm } from "./modules/Window";
import { generateId, timeout } from "./modules/lib";
export { generateId, timeout } from "./modules/lib";
// import bsod from "./modules/BSoD";
import { Provider } from 'react-redux';
import "./stylesheets/style/core.css";
import { Taskbar, TaskbarIcon, StartMenu } from "./modules/Explorer";
import NotificationSystem, { Notification } from "./modules/Notification";
import { createNotification } from "./store/notificationslice";
export { createNotification } from "./store/notificationslice";
import html2canvas from "html2canvas";
import ClosedBetaLogin from "./modules/closedBetaLogin";

const BeansiteXP=({ startMenuShortcuts, children, config={} })=>{
  const windows=useSelector((state)=>state.windows.value);
  const userdata=useSelector((state)=>state.userdata);
  const tbi=useSelector((state)=>state.tbi.value);
  const dispatch=useDispatch();
  const Icon=document.getElementById("icon");
  document.title="Beansite XP";
  Icon.href="/assets/beanxp_logo.png";
  useEffect(()=>{
    dispatch(setUsername("Guest"));
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
export default BeansiteXP;