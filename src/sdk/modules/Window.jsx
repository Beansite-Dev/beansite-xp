import { Component, createRef, useState, createContext, useEffect } from "react";
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { createWindow, updateWindow, destroyWindow } from "../store/windowslice";
import { Provider } from 'react-redux';
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import remarkBreaks from "remark-breaks";
import $ from 'jquery';
import { createTBI, destoryTBI, updateTBI } from "../store/tbislice";
import { WinUtils, waitForElm } from "./WinUtils";
export { WinUtils, waitForElm } from "./WinUtils";
import { generateId, timeout } from "./lib";
import { TrackGoogleAnalyticsEvent } from "./Analytics";

export const Window=({
    children,
    size={
      "height": "38vmin",
      "width": "58vmin"},
    pos={
      "x":["left","5vmin"],
      "y":["top","5vmin"],},
    includeTitlebarOptions={
      "min": true,
      "max": true,
      "close": true,
    },
    callbacks={},
    id,
    title="Window",
    icon="./icon/xp/Command Prompt.png",
    customLayer,
    markdownSource,
    minimized,
    maximized,
    closed,
    safeGraphics=false,
    closable=true,
    maximizable=true,
    minimizable=true,
    draggable=true,
    customStyle,
    borderless=false,
    useFallbackCss=false,
  })=>{
  const windows=useSelector((state)=>state.windows.value);
  const settings=useSelector((state)=>state.settings.value);
  const dispatch=useDispatch();
  const[win_id,setWin_id]=useState(generateId(10));
  var [window_state,setWindowState]=useState({
    "title": title,
    "win_id": win_id,
    "eid": id,
    "size": size,
    "pos": pos,
    "includeTitlebarOptions": includeTitlebarOptions,
    "icon": icon,
    "children":{}
  });
  const updateState=(win)=>{
    setWindowState(Object.assign({},window_state,{"pos":{
      "x":win.style.left,
      "y":win.style.top,}}));
    setWindowState(Object.assign({},window_state,{"size":{
      "height":win.style.height,
      "width":win.style.width,}}));
    // dispatch(updateWindow({"win_id":win_id,"windata":window_state}));
  }
  const nb_actions={
    destroy:(e)=>{ //! dangerous
      if(closable){
        e?e.preventDefault():null;
        (callbacks.beforeWindowClose)?callbacks.beforeWindowClose():null;
        document.getElementById(`win_${id}`).remove();
        dispatch(destroyWindow(win_id));
        dispatch(destoryTBI(win_id));
      }
    },
    close:(e,ani=true,track=true)=>{
      if(closable){
        e?e.preventDefault():null;
        (callbacks.beforeWindowClose)?callbacks.beforeWindowClose():null;
        WinUtils.hideWindow(id,ani);
        (track)?TrackGoogleAnalyticsEvent(
          "closed_window",
          `Closed Window - ${id}`,
          window.location.pathname + window.location.search,
          {id,title}
        ):null;
      }
    },
    open:(e)=>{
      e?e.preventDefault():null;
      (callbacks.beforeWindowOpen)?callbacks.beforeWindowOpen():null;
      WinUtils.openWindow(id);
    },
    min:(e)=>{
      if(minimizable){
        e?e.preventDefault():null;
        (callbacks.beforeWindowMinimize)?callbacks.beforeWindowMinimize():null;
        const isMin=document.getElementById(`win_${id}_isMin?`);
        document.getElementById(`win_${id}`).style.display="none";
        isMin.setAttribute("content",!(isMin.getAttribute("content")==="true"));
        TrackGoogleAnalyticsEvent(
          "min_window",
          `Minimized Window - ${id}`,
          window.location.pathname + window.location.search,
          {id,title}
        );
      }
    },
    maximize:(maxBtn,win,setIcon=false)=>{
      if(maximizable){
        updateState(win);
        (callbacks.beforeWindowMaximize)?callbacks.beforeWindowMaximize():null;
        if(setIcon){
          var theme=WinUtils.getTheme(settings);
          maxBtn.style.backgroundImage=`url("/icons/${theme}/Restore.png")`;
        }
        win.classList.add("maximized");
        TrackGoogleAnalyticsEvent(
          "max_window",
          `Maximized Window - ${id}`,
          window.location.pathname + window.location.search,
          {id,title}
        );
      }
    },
    unmaximize:(maxBtn,win)=>{
      (callbacks.beforeWindowUnmaximize)?callbacks.beforeWindowUnmaximize():null;
      win.classList.remove("maximized");
      win.style.top=window_state.pos;
      win.style.left=window_state.pos;
      win.style.height=window_state.size;
      win.style.width=window_state.size;
      TrackGoogleAnalyticsEvent(
        "unmax_window",
        `Unmaximized Window - ${id}`,
        window.location.pathname + window.location.search,
        {id,title}
      );
    },
    maxToggle:(e)=>{
      if(maximizable){
        e?e.preventDefault():null;
        const isMax=document.getElementById(`win_${id}_isMax?`);
        const maxBtn=document.getElementById(`win_${id}_max`);
        const win=document.getElementById(`win_${id}`);
        // maxBtn.innerHTML=(isMax.getAttribute("content")==="false")?"🗗":"🗖";
        var theme=WinUtils.getTheme(settings);
        maxBtn.style.backgroundImage=`url("/icons/${theme}/${(isMax.getAttribute("content")==="false")?"Restore":"Maximize"}.png")`;
        nb_actions[(isMax.getAttribute("content")==="false")?"maximize":"unmaximize"](maxBtn,win);
        isMax.setAttribute("content",`${!(isMax.getAttribute("content")==="true")}`);
      }
    },
  }
  const dragElement=(elmnt)=>{
    if(document.getElementById(`win_${id}_isMax?`).getAttribute("content")==="false"){
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
        //! buggy with new themes
        document.getElementById("maximizePreview").style.opacity=(pos4<=60)?1:0;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
      const closeDragElement=()=>{
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
        elmnt.style.transition=".5s";
        var isMax=document.getElementById(`win_${id}_isMax?`);
        // ! buggy with new theme system
        if(pos4<=60){
          document.getElementById("maximizePreview").style.opacity=0;
          isMax.setAttribute("content",`true`);
          nb_actions.maximize(document.getElementById(`win_${id}_max`),elmnt,true);
        }else{updateState(elmnt);}
      }
      if (document.getElementById(elmnt.id + "_header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "_header").onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }
    } else {
      console.log("drag canceled");
    }
  }
  const _onFocus=()=>{
    document.getElementById(`win_${id}`).style.zIndex="567";};
  const _onBlur=()=>{
    document.getElementById(`win_${id}`).style.zIndex="auto";};
  useEffect(()=>{
    const e=document.getElementById(`win_${id}`);
    // console.log(`created window with data: ${JSON.stringify(window_state)}`);
    if(draggable)dragElement(e);
    dispatch(createTBI({"win_id":win_id,"windata":window_state }));
    dispatch(createWindow({"win_id":win_id,"windata":window_state }));
    $("Window").on("click",function() {
      console.log(`focused on element ${this.id}`)
      $("Window").not(this).css("z-index", "290");
      $(this).css("z-index", "295");
    });
    new ResizeObserver(()=>{
      e.style.transition="0s";
      updateState(e);
    }).observe(e);
    e.style.opacity="1";
    if(closed)nb_actions.close({preventDefault:()=>{}},false,false);
    if(minimized){
      document.getElementById(`win_${id}`).style.display="none";
      document.getElementById(`win_${id}_isMin?`).setAttribute("content",false);
    };
    if(maximized)nb_actions.maximize(null,false);
  },[]);
  return(<div 
    className={`Window${safeGraphics?" Win_SafeGraphics":""}${borderless?" Win_Borderless":""}`}
    style={Object.assign(
    useFallbackCss?{
      "border":"#2432b2 1px solid",
      "background":"#2939cf",
      "fontFamily":'"Tahoma", sans-serif'
    }:{},{
      ...customStyle,
      "height":size.height,
      "width":size.width,
      // [pos.x[0]]:[pos.x[1]],
      // [pos.y[0]]:[pos.y[1]],
      "top": pos.y[1],
      "left": pos.x[1],
      "zIndex":customLayer?customLayer:"auto",
    })}
    tabIndex={Object.keys(windows).indexOf(win_id)}
    id={`win_${id}`}>
    <header id={`win_${id}_header`} className="WindowHeader" style={useFallbackCss?{
      "background":"linear-gradient(0deg, #2939cf 0%, #2d4ce4 35%, #2d4ce4 75%, #4c90ff 100%)"
    }:{}}>
      <meta id={`win_${id}_isMin?`} content="false"/>
      <meta id={`win_${id}_isMax?`} content="false"/>
      <div className="icon" style={{"backgroundImage":`url("${icon}")`}}></div>
      <h2 style={useFallbackCss?{
        "color":"#fff"
      }:{}}>{title}</h2>
      {includeTitlebarOptions.min?<button 
      className="min" id={`win_${id}_min`} 
      onClick={(e)=>nb_actions.min(e)} 
      style={useFallbackCss?{"backgroundImage":"url('/icons/xp/Minimize.png')"}:{}}></button>:null}
      {includeTitlebarOptions.max?<button 
      className="max" id={`win_${id}_max`} 
      onClick={(e)=>nb_actions.maxToggle(e)}
      style={useFallbackCss?{"backgroundImage":"url('/icons/xp/Maximize.png')"}:{}}></button>:null} {/* 🗗 for unmaximize */}
      {includeTitlebarOptions.close?<button 
      className="close" id={`win_${id}_close`} 
      onClick={(e)=>nb_actions.close(e)}
      style={useFallbackCss?{"backgroundImage":"url('/icons/xp/Exit.png')"}:{}}></button>:null}
    </header>
    <div className="content" style={useFallbackCss?{
      "background":"#fff"
    }:{}}>
      <Markdown remarkPlugins={[
        remarkGfm,
        remarkBreaks]}
        className="md">
        {markdownSource===undefined?"":String(markdownSource)}</Markdown>
      {children}
    </div>
  </div>)
}