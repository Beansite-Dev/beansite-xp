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

const BeansiteXPGui=(props)=>{
  const windows=useSelector((state)=>state.windows.value);
  const userdata=useSelector((state)=>state.userdata);
  const tbi=useSelector((state)=>state.tbi.value);
  const dispatch=useDispatch();
  const Icon=document.getElementById("icon");
  document.title="Beansite XP";
  Icon.href="/assets/beanxp_logo.png";
  useEffect(()=>{
    dispatch(setUsername("Guest"));
  },[]);
  return (<>
    <div id="bxpgui">
      <div id="winWrapper">
        {props.children}
      </div>
      <div id="maximizePreview"></div>
      <StartMenu>

      </StartMenu>
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
export const BeansiteXP=(props)=>{
  return (<BeansiteXPGui>{props.children}</BeansiteXPGui>);}
export default BeansiteXP;