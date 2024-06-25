import { Component, createRef, useState, createContext } from "react";
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux'
import { createWindow, destroyWindow } from "../store/windowslice";
import { Provider } from 'react-redux'

const generateId=(length)=>{
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
export class WindowClass extends Component {
  win_id=generateId(10);
  constructor(props){
    super(props);
    this.state={
      "title": this.props.title,
      "win_id": this.win_id,
      "eid": this.props.id,
      "size": this.props.size,
      "pos": this.props.pos,
      "includeTitlebarOptions": this.props.includeTitlebarOptions,
      "icon": this.props.icon,
    };
  }
  updateDemensions=()=>{
    let win=document.getElementById(`win_${this.props.id}`);
    if(win){
      this.setState(prevState=>{
        let state=Object.assign({},prevState);
        state.pos={
          "x": win.style.left,
          "y": win.style.top};
        state.size={
          "height": win.style.height,
          "width": win.style.width,};
        return {state};});
    }
  }
  nb_actions={
    close:(e)=>{
      e.preventDefault();
      document.getElementById(`win_${this.props.id}`).remove();
      this.props.dispatch(destroyWindow(this.win_id));
    },
    min:(e)=>{
      e.preventDefault();
      const isMin=document.getElementById(`win_${this.props.id}_isMin?`);
      document.getElementById(`win_${this.props.id}`).style.display="none";
      isMin.setAttribute("content",!(isMin.getAttribute("content")==="true"));
    },
    maximize:(maxBtn,win)=>{
      this.updateDemensions();
      win.classList.add("maximized");
    },
    unmaximize:(maxBtn,win)=>{
      win.classList.remove("maximized");
      win.style.top=this.state.pos.y;
      win.style.left=this.state.pos.x;
      win.style.height=this.state.size.height;
      win.style.width=this.state.size.width;
    },
    maxToggle:(e)=>{
      e.preventDefault();
      const isMax=document.getElementById(`win_${this.props.id}_isMax?`);
      const maxBtn=document.getElementById(`win_${this.props.id}_max`);
      const win=document.getElementById(`win_${this.props.id}`);
      maxBtn.innerHTML=(isMax.getAttribute("content")==="false")?"🗗":"🗖";
      this.nb_actions[(isMax.getAttribute("content")==="false")?"maximize":"unmaximize"](maxBtn,win);
      isMax.setAttribute("content",!(isMax.getAttribute("content")==="true"));
    },
  }
  dragElement=(elmnt)=>{
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const updateDemensions=()=>this.updateDemensions();
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
      updateDemensions();
    }
    if (document.getElementById(elmnt.id + "_header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "_header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  }
  componentDidMount() {
    const e=document.getElementById(`win_${this.props.id}`);
    console.log(`created window with data: ${JSON.stringify(this.state)}`)
    this.dragElement(e);
    this.props.dispatch(createWindow({"win_id":this.win_id,"windata":this.state }))
    new ResizeObserver(()=>{
      e.style.transition="0s";
      this.updateDemensions();
    }).observe(e);
  }
  render(){
    return(<div 
      className="Window"
      style={{
        "height":this.props.size.height,
        "width":this.props.size.width,
        "left":this.props.pos.x,
        "top":this.props.pos.y,
      }} 
      id={`win_${this.props.id}`}>
      <header id={`win_${this.props.id}_header`}>
        <meta id={`win_${this.props.id}_isMin?`} content="false"/>
        <meta id={`win_${this.props.id}_isMax?`} content="false"/>
        <div className="icon" style={{"backgroundImage":`url("${this.props.icon}")`}}></div>
        <h2>{this.props.title}</h2>
        {this.props.includeTitlebarOptions.min?<button id={`win_${this.props.id}_min`} onClick={(e)=>this.nb_actions.min(e)}>🗕</button>:null}
        {this.props.includeTitlebarOptions.max?<button id={`win_${this.props.id}_max`} onClick={(e)=>this.nb_actions.maxToggle(e)}>🗖</button>:null} {/* 🗗 for unmaximize */}
        {this.props.includeTitlebarOptions.close?<button id={`win_${this.props.id}_close`} onClick={(e)=>this.nb_actions.close(e)}>✖</button>:null}
      </header>
      <div className="content">
        {this.props.children}
      </div>
    </div>);
  }
}