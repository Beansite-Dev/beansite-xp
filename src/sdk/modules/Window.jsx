import { Component, createRef, useState, createContext, useEffect } from "react";
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { createWindow, updateWindow, destroyWindow } from "../store/windowslice";
import { Provider } from 'react-redux';

export const generateId=(length)=>{
  let result='';
  const characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter=0;
  while (counter<length) {
    result+=characters.charAt(Math.floor(Math.random() * charactersLength));
    counter+=1;
  }
  return btoa(result);
}
export const Window=(props)=>{
  const windows=useSelector((state)=>state.windows.value);
  const dispatch=useDispatch();
  const[win_id,setWin_id]=useState(generateId(10));
  var window_state={
    "title": props.title,
    "win_id": win_id,
    "eid": props.id,
    "size": props.size,
    "pos": props.pos,
    "includeTitlebarOptions": props.includeTitlebarOptions,
    "icon": props.icon,
  };
  const updateState=(win)=>{
    window_state=Object.assign({},window_state,{"pos":{
      "x":win.style.left,
      "y":win.style.top,}});
    window_state=Object.assign({},window_state,{"size":{
      "height":win.style.height,
      "width":win.style.width,}});
    dispatch(updateWindow({"win_id":win_id,"windata":window_state}));
  }
  const nb_actions={
    close:(e)=>{
      e.preventDefault();
      props.callbacks.beforeWindowClose();
      document.getElementById(`win_${props.id}`).remove();
      dispatch(destroyWindow(win_id));
    },
    min:(e)=>{
      e.preventDefault();
      props.callbacks.beforeWindowMinimize();
      const isMin=document.getElementById(`win_${props.id}_isMin?`);
      document.getElementById(`win_${props.id}`).style.display="none";
      isMin.setAttribute("content",!(isMin.getAttribute("content")==="true"));
    },
    maximize:(maxBtn,win)=>{
      updateState(win);
      props.callbacks.beforeWindowMaximize();
      win.classList.add("maximized");
    },
    unmaximize:(maxBtn,win)=>{
      props.callbacks.beforeWindowUnmaximize();
      win.classList.remove("maximized");
      win.style.top=window_state.pos?window_state.pos.y:windows.pos.y;
      win.style.left=window_state.pos?window_state.pos.x:windows.pos.x;
      win.style.height=window_state.size?window_state.size.height:windows.size.height;
      win.style.width=window_state.size?window_state.size.width:windows.size.width;
    },
    maxToggle:(e)=>{
      e.preventDefault();
      const isMax=document.getElementById(`win_${props.id}_isMax?`);
      const maxBtn=document.getElementById(`win_${props.id}_max`);
      const win=document.getElementById(`win_${props.id}`);
      maxBtn.innerHTML=(isMax.getAttribute("content")==="false")?"🗗":"🗖";
      nb_actions[(isMax.getAttribute("content")==="false")?"maximize":"unmaximize"](maxBtn,win);
      isMax.setAttribute("content",!(isMax.getAttribute("content")==="true"));
    },
  }
  const dragElement=(elmnt)=>{
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    updateState(elmnt);
    const dragMouseDown=(e)=>{
      e = e || window.event;
      e.preventDefault();
      elmnt.style.transition="0s";
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
    const elementDrag=(e)=>{
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    const closeDragElement=()=>{
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
      elmnt.style.transition=".5s";
      updateState(elmnt);
    }
    if (document.getElementById(elmnt.id + "_header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "_header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  }
  useEffect(()=>{
    const e=document.getElementById(`win_${props.id}`);
    console.log(`created window with data: ${JSON.stringify(window_state)}`)
    dragElement(e);
    dispatch(createWindow({"win_id":win_id,"windata":window_state }))
    new ResizeObserver(()=>{
      e.style.transition="0s";
      updateState(e);
    }).observe(e);
  },[])
  return(<div 
    className="Window"
    style={{
      "height":props.size.height,
      "width":props.size.width,
      "left":props.pos.x,
      "top":props.pos.y,
    }} 
    id={`win_${props.id}`}>
    <header id={`win_${props.id}_header`}>
      <meta id={`win_${props.id}_isMin?`} content="false"/>
      <meta id={`win_${props.id}_isMax?`} content="false"/>
      <div className="icon" style={{"backgroundImage":`url("${props.icon}")`}}></div>
      <h2>{props.title}</h2>
      {props.includeTitlebarOptions.min?<button id={`win_${props.id}_min`} onClick={(e)=>nb_actions.min(e)}>🗕</button>:null}
      {props.includeTitlebarOptions.max?<button id={`win_${props.id}_max`} onClick={(e)=>nb_actions.maxToggle(e)}>🗖</button>:null} {/* 🗗 for unmaximize */}
      {props.includeTitlebarOptions.close?<button id={`win_${props.id}_close`} onClick={(e)=>nb_actions.close(e)}>✖</button>:null}
    </header>
    <div className="content">
      {props.children}
    </div>
  </div>)
}