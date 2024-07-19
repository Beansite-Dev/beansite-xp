import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import store from "../store/store";
import { WinUtils } from "./WinUtils";
import { Window } from "./Window";
import { debug } from "../../App";
import FileSystem from "../../beanpowered/assets/fs";

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
    const StartMenuIcon=({title,icon,win_id})=>{
        return(<div className="startmenuIcon" onClick={(e)=>{
            e.preventDefault();
            WinUtils.openWindow(win_id);
        }}>
            <div className="icon" style={{"backgroundImage":`url("${icon}")`}}></div>
            <h1>{title}</h1>
        </div>)
    }
    return(<div id="startmenu">
        <meta id="startMenuOpen?" content="false" />
        <div id="topbar">
            <h1>{userdata.username}</h1>
        </div>
        <div className="contents">
            <div className="left">
                <StartMenuIcon 
                    title="Welcome"
                    icon="/icons/xp/Information.png"
                    win_id="welcome"/>
                <StartMenuIcon 
                    title="Beanpowered"
                    icon="/icons/bp.png"
                    win_id="beanpowered"/>
                <StartMenuIcon 
                    title="Explorer"
                    icon="/icons/xp/Explorer.png"
                    win_id="explorer"/>
                {debug?<>
                    <StartMenuIcon 
                        title="Debug Menu"
                        icon="/icons/xp/Services.png"
                        win_id="debugMenu"/>
                </>:null}
            </div>
            <div className="right">
            </div>
        </div>
        <div id="footer">
            <div 
                className="action"
                onClick={(e)=>{
                    e.preventDefault();
                    document.getElementById("shutdownScreen").style.display="flex";
                }}>
                <div className="icon" style={{"backgroundImage":`url("/icons/xp/Power.png")`}}></div>
                <h1>Shut down</h1>
            </div>
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
const Explorer=()=>{
    const[currentDirectory,setCurrentDirectory]=useState([]);
    return(<Window
    size={{
      "height": "38vmin",
      "width": "58vmin"}} 
    pos={{
      "x":["left","10vmin"],
      "y":["top","10vmin"],}}
    includeTitlebarOptions={{
      "min": true,
      "max": true,
      "close": true,}}
    callbacks={{
      beforeWindowClose:()=>{
        console.log("killing game process");
        document.getElementById("gl_frame").setAttribute("src","");},
    }}
    closed
    id="explorer"
    title="Explorer"
    icon="/icons/xp/Explorer.png">
        <div id="ex_topbar">
            {FileSystem.map(file=>{
                <h1>{file.name}</h1>
            })}
        </div>
    </Window>)
}
export {
    Taskbar,
    StartMenu,
    TaskbarIcon,
    Explorer
}