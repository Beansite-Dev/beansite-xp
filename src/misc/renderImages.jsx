import "./style/style.css";
import { Window } from "../sdk/sdk";
import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
// import domtoimage from 'dom-to-image';
// import { toPng } from 'html-to-image';

const RenderImage=()=>{
    const[winData,setWinData]=useState({
        title:"Test Window",
        icon:"Information",
        src:`# Hello!`,
    });
    const Ref=useRef(null);
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
            refs={Ref}
            customLayer="999"
            id="testwin"
            safeGraphics
            closable={false}
            maximizable={false}
            minimizable={false}
            title={winData.title}
            icon={`/icons/xp/${winData.icon}.png`}
            markdownSource={winData.src}>
        </Window>
        <button id="export" onClick={(e)=>{
            e.preventDefault();
            var win=document.getElementById("win_testwin");
            // working
            html2canvas(win,{
                backgroundColor:null}).then(canvas=>{
                // document.body.appendChild(canvas);
                var image=canvas.toDataURL("image/png").replace("image/png","image/octet-stream");
                var link=document.createElement('a');
                link.setAttribute('download','BeansiteXP_Window.png');
                link.setAttribute('href',image);
                link.click();
            });
            //! DOESNT FUCKING WORK AAAA
            // domtoimage.toSvg(win)
            // domtoimage.toPng(Ref.current)
            // .then((dataUrl)=>{
                // var link=document.createElement("a");
                // link.href=dataUrl;
                // link.download="Window";
                // link.click();
            // }).catch((error)=>{console.error(error)});
            //! DOESNT FUCKING WORK AAAA
            // toPng(document.getElementById("win_testwin"), { cacheBust: false })
            // .then((dataUrl)=>{
                // const link=document.createElement("a");
                // link.download="Window.png";
                // link.href=dataUrl;
                // link.click();
            // }).catch((err)=>{
                // console.error(err);
            // });
        }}>Export</button>
    </div>)
};
export default RenderImage;