import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import store from "../store/store";

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
    open:()=>{
        document.getElementById("startmenu").style.transform=`translateY(0px)`
        document.getElementById("startmenu").style.filter=`brightness(100%)`},
    close:()=>{
        document.getElementById("startmenu").style.transform=`translateY(65vmin)`
        document.getElementById("startmenu").style.filter=`brightness(85%)`},
}
const StartMenu=(props)=>{
    const userdata=useSelector((state)=>state.userdata);
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
        {tb_props.children}
        <button id="startbtn" onClick={()=>{
            // console.log(document.getElementById("startMenuOpen?").getAttribute("content")==="true");
            sm_actions[(
                (document.getElementById("startMenuOpen?").getAttribute("content")==="true")
                    ?"close":"open")]();
                document.getElementById("startMenuOpen?").setAttribute("content",
                    !(document.getElementById("startMenuOpen?").getAttribute("content")==="true"));
        }}>Start</button>
    </div>);
}
export {
    Taskbar,
    StartMenu,
    TaskbarIcon
}