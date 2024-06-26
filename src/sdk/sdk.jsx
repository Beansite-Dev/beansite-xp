import { Component, createRef, useState, createContext } from "react";
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux'
import store from './store/store'
import { WindowClass } from "./modules/Window";
import { Provider } from 'react-redux'
import "./stylesheets/style/style.css"

export const SDK={
  OpenWindow:(win_id)=>{

  },
}

const BeansiteXPGui=(props)=>{
  const windows=useSelector((state)=>state.windows.value);
  const dispatch=useDispatch();
  document.title="Beansite XP";
  const Icon=document.getElementById("icon");
  const TaskbarIcon=(tbi_props)=>{
    return(<div className="tbicon" id={`${tbi_props.id}_tbicon`} onClick={(e)=>{
      e.preventDefault();
      document.getElementById(`win_${tbi_props.eid}_isMin?`).setAttribute("content",
        !(document.getElementById(`win_${tbi_props.eid}_isMin?`).getAttribute("content")==="true"));
      document.getElementById(`win_${tbi_props.eid}`).style.display=
        !(document.getElementById(`win_${tbi_props.eid}_isMin?`).getAttribute("content")==="true")?
        "block":"none";
    }}>
      <div className="tbi_icon" style={{"backgroundImage":`url("${tbi_props.icon}")`}}></div>
      {tbi_props.title}
    </div>)
  }
  const Taskbar=(tb_props)=>{
    return(<div id="taskbar">
      <button id="startbtn">Start</button>
      {tb_props.children}
    </div>)
  }
  return (<div id="bxpgui">
    {props.children}
    <Taskbar>
      {Object.keys(windows).map((win_id)=>
        <TaskbarIcon 
          key={win_id} 
          title={windows[win_id].title} 
          id={`${win_id}_tbs`} 
          eid={windows[win_id].eid} 
          icon={windows[win_id].icon} />)}
    </Taskbar>
  </div>)
}
const BeansiteXP=(props)=>{
  return (<Provider store={store}>
    <BeansiteXPGui>{props.children}</BeansiteXPGui>
  </Provider>)
}
export const Window=(props)=>{
  const windows=useSelector((state)=>state.windows.value);
  const dispatch=useDispatch();
  return (<WindowClass 
    state={windows}
    dispatch={dispatch}
    size={{
      "height": props.size.height,
      "width": props.size.width}} 
    pos={{
      "x":props.pos.x,
      "y":props.pos.y,}}
    includeTitlebarOptions={{
      "min": props.includeTitlebarOptions.min,
      "max": props.includeTitlebarOptions.max,
      "close": props.includeTitlebarOptions.close,
    }}
    callbacks={{
      beforeWindowClose:()=>{props.callbacks.beforeWindowClose?props.callbacks.beforeWindowClose():null},
      beforeWindowMinimize:()=>{props.callbacks.beforeWindowMinimize?props.callbacks.beforeWindowMinimize():null},
      beforeWindowMaximize:()=>{props.callbacks.beforeWindowMaximize?props.callbacks.beforeWindowMaximize():null},
      beforeWindowUnmaximize:()=>{props.callbacks.beforeWindowUnmaximize?props.callbacks.beforeWindowUnmaximize():null},
    }}
    id={props.id}
    title={props.title}
    icon={props.icon}>
      {props.children}
  </WindowClass>)
}
export default BeansiteXP;