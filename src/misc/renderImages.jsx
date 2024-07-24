import "./style/style.css";
import { Window } from "../sdk/sdk";
import { useState } from "react";
import html2canvas from "html2canvas";

const RenderImage=()=>{
    const[winData,setWinData]=useState({
        title:"Test Window",
        icon:"Information",
        src:`# Hello!`,
    });
    return(<div id="renderImages">
        <div id="ri_params">
            <h1>Window Parameters</h1>
            <hr />{/*--------------------*/}
            <h2>Window Title</h2>
            <input
                id="windowTitle"
                defaultValue="Test Window"
                onChange={(e)=>{
                    setWinData(prevState=>({
                        ...prevState,
                        title:e.target.value,
                    }))
                }}></input>
            <h2>Window Content</h2>
            <textarea 
                id="windowContents" 
                cols="40" 
                rows="5"
                defaultValue="# Hello!"
                onChange={(e)=>{
                    setWinData(prevState=>({
                        ...prevState,
                        src:e.target.value,
                    }))
                }}></textarea>
        </div>
        <div id="maximizePreview"></div>
        <Window 
            size={{
              "height": "38vmin",
              "width": "58vmin"}} 
            pos={{
              "x":["left","calc(50% - (58vmin / 2) + 10vmin)"],
              "y":["top","calc(50% - (38vmin / 2))"],}}
            includeTitlebarOptions={{
              "min": true,
              "max": true,
              "close": true,
            }}
            customLayer="999"
            id="testwin"
            title={winData.title}
            icon={`/icons/xp/${winData.icon}.png`}
            markdownSource={winData.src}>
        </Window>
        <button id="export" onClick={(e)=>{
            e.preventDefault();
            html2canvas(document.getElementById("win_testwin"),{
                backgroundColor:null}).then(canvas=>{
                // document.body.appendChild(canvas);
                var image=canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
                var link=document.createElement('a');
                link.setAttribute('download','BeansiteXP_Window.png');
                link.setAttribute('href',image);
                link.click();
            });
        }}>Export</button>
    </div>)
};
export default RenderImage;