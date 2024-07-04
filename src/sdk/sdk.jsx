import { Component, createRef, useState, createContext, useEffect } from "react";
// import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import store from './store/store';
import { setUsername } from "./store/userdataslice";
export { Window, generateId } from "./modules/Window";
// import bsod from "./modules/BSoD";
import { Provider } from 'react-redux';
import "./stylesheets/style/core.css";

const BeansiteXPGui=(props)=>{
  const windows=useSelector((state)=>state.windows.value);
  const userdata=useSelector((state)=>state.userdata);
  const tbi=useSelector((state)=>state.tbi.value);
  const dispatch=useDispatch();
  const Icon=document.getElementById("icon");
  document.title="Beansite XP";
  Icon.href="/assets/beanxp_logo.png";
  const TaskbarIcon=(tbi_props)=>{
    return(<div className="tbicon" id={`${tbi_props.eid}_tbi`} onClick={(e)=>{
      e.preventDefault();
      document.getElementById(`win_${tbi_props.eid}_isMin?`).setAttribute("content",
        !(document.getElementById(`win_${tbi_props.eid}_isMin?`).getAttribute("content")==="true"));
      document.getElementById(`win_${tbi_props.eid}`).style.display=
        !(document.getElementById(`win_${tbi_props.eid}_isMin?`).getAttribute("content")==="true")?
        "block":"none";
    }}>
      <div className="tbi_icon" style={{"backgroundImage":`url("${tbi_props.icon}")`}}></div>
      {tbi_props.title}
    </div>);
  }
  const sm_actions={
    open:()=>document.getElementById("startmenu").style.transform=`translateX(0px)`,
    close:()=>document.getElementById("startmenu").style.transform=`translateX(-55vmin)`,
  }
  const StartMenu=(props)=>{
    return(<div id="startmenu">
      <meta id="startMenuOpen?" content="false" />
      <div id="topbar">
        <h1>{userdata.username}</h1>
      </div>
      <div className="contents">
        <div className="left">
        </div>
        <div className="right">
        </div>
      </div>
      <div id="footer">
      </div>
    </div>);
  }
  const Taskbar=(tb_props)=>{
    return(<div id="taskbar">
      <button id="startbtn" onClick={()=>{
        // console.log(document.getElementById("startMenuOpen?").getAttribute("content")==="true");
        sm_actions[(
          (document.getElementById("startMenuOpen?").getAttribute("content")==="true")
          ?"close":"open")]();
        document.getElementById("startMenuOpen?").setAttribute("content",
          !(document.getElementById("startMenuOpen?").getAttribute("content")==="true"));
      }}>Start</button>
      {tb_props.children}
    </div>);
  }
  useEffect(()=>{
    dispatch(setUsername("Guest"));
  },[]);
  return (<>
    <div id="bxpgui">
      <div id="winWrapper">
        {props.children}
        {/* {Object.keys(windows).map((win_id)=><Window 
        size={{
          "height": windows[win_id].size.height,
          "width": windows[win_id].size.height}} 
        pos={{
          "x": windows[win_id].pos.x,
          "y": windows[win_id].pos.y,}}
        includeTitlebarOptions={{
          "min": windows[win_id].includeTitlebarOptions.min,
          "max": windows[win_id].includeTitlebarOptions.max,
          "close": windows[win_id].includeTitlebarOptions.close,
        }}
        callbacks={{
          beforeWindowClose:()=>{
            windows[win_id].callbacks.beforeWindowClose();},
          beforeWindowMinimize:()=>{
            windows[win_id].callbacks.beforeWindowMinimize();},
          beforeWindowMaximize:()=>{
            windows[win_id].callbacks.beforeWindowMaximize();},
          beforeWindowUnmaximize:()=>{
            windows[win_id].callbacks.beforeWindowUnmaximize();},
        }}
        id={windows[win_id].eid}
        title={windows[win_id].title}
        icon={windows[win_id].icon}>
          {windows[win_id].children}
      </Window>)} */}
      </div>
      <div id="maximizePreview"></div>
      <StartMenu>

      </StartMenu>
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
  return (<Provider store={store}>
      <BeansiteXPGui>{props.children}</BeansiteXPGui>
  </Provider>);
}
function waitForElm(selector) {
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));}
      const observer = new MutationObserver(mutations => {
        if (document.querySelector(selector)) {
          observer.disconnect();
          resolve(document.querySelector(selector));
        }});
      observer.observe(document.body, {
        childList: true,
        subtree: true});
  });
}
export const SDK={
  hideWindow:async(win_id)=>{
    await waitForElm(`#win_${win_id}`);
    await waitForElm(`#${win_id}_tbi`);
    if(document.getElementById(`win_${win_id}`)&&
      document.getElementById(`${win_id}_tbi`)){
      document.getElementById(`win_${win_id}`).style.display="none";
      document.getElementById(`${win_id}_tbi`).style.display="none";
    } else {
      console.warn(`[SDK_ERROR] > REFRENCE_ERROR\n${win_id} does not exist`);
    }
  },
  openWindow:async(win_id)=>{
    await waitForElm(`#win_${win_id}`);
    await waitForElm(`#${win_id}_tbi`);
    if(document.getElementById(`win_${win_id}`)&&
      document.getElementById(`${win_id}_tbi`)){
      document.getElementById(`win_${win_id}`).style.display="block";
      document.getElementById(`${win_id}_tbi`).style.display="flex";
    } else {
      console.warn(`[SDK_ERROR] > REFRENCE_ERROR\n${win_id} does not exist`);
    }
  }
} 

//!DEPRICATED: v0.3 
// const Window=(props)=>{
//   const windows=useSelector((state)=>state.windows.value);
//   const dispatch=useDispatch();
//   return (<WindowClass 
//     state={windows}
//     dispatch={dispatch}
//     size={{
//       "height": props.size.height,
//       "width": props.size.width}} 
//     pos={{
//       "x":props.pos.x,
//       "y":props.pos.y,}}
//     includeTitlebarOptions={{
//       "min": props.includeTitlebarOptions.min,
//       "max": props.includeTitlebarOptions.max,
//       "close": props.includeTitlebarOptions.close,
//     }}
//     callbacks={{
//       beforeWindowClose:()=>{props.callbacks.beforeWindowClose?props.callbacks.beforeWindowClose():null},
//       beforeWindowMinimize:()=>{props.callbacks.beforeWindowMinimize?props.callbacks.beforeWindowMinimize():null},
//       beforeWindowMaximize:()=>{props.callbacks.beforeWindowMaximize?props.callbacks.beforeWindowMaximize():null},
//       beforeWindowUnmaximize:()=>{props.callbacks.beforeWindowUnmaximize?props.callbacks.beforeWindowUnmaximize():null},
//     }}
//     id={props.id}
//     title={props.title}
//     icon={props.icon}>
//       {props.children}
//   </WindowClass>)
// }
// export const SDK={
//   BeansiteXP:BeansiteXP,
//   Window:Window,
// };
export default BeansiteXP;