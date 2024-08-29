import React, { useState, useEffect } from "react";
import "./style/style.css";
import games from "./assets/games";
import { WinUtils, TrackGoogleAnalyticsEvent } from "../sdk/sdk";
const BeanpoweredGui=(props)=>{
    const [res,setRes]=useState(games);
    const [selectedGame,setSelectedGame]=useState({
        "title":"Select a game",
        "gdata":{
            "url":null,
            "id": "_placeholder",
            "type": "OpenInGL"
        }
    });
    const OpenGame=({ url, id, type }, title)=>{
        TrackGoogleAnalyticsEvent(
            "game_played",
            `Beanpowered - Player Game "${title}"`,
            window.location.pathname + window.location.search,
            { url,id,type,title}
        );
        if(url){
            switch(type){
                case "OpenInGL":
                    props.setGlTitle(title);
                    document.getElementById("gl_frame").setAttribute("src",url);
                    WinUtils.openWindow("gameloader");break;
                case "OpenInNewTab":
                    null;
            }
        }
    }
    const SidebarItem=({ title, url, id, type, index })=>{
        return(<div className="bpsb_item" 
            onClick={()=>{setSelectedGame({
                "title":title,
                "gdata":games[title]
            });}}>{title}</div>);}
    return(<div id="bp_gui">
        <div className="bp_sidebar">
            <input 
                autoComplete="off"
                type="text" 
                id="search" 
                placeholder="Search Catalog" 
                onInput={(e)=>{
                    setRes(e.target.value?
                        Object.keys(games)
                        .filter(key=>key.toLowerCase().includes(e.target.value.toLowerCase()))
                        .reduce((obj,key) => {
                            obj[key]=games[key];
                            return obj;
                        },{}):games)}}/>
            {Object.keys(res).map((title,index)=><SidebarItem 
                key={index}
                index={index}
                title={title}
                url={games[title].url}
                id={games[title].id}
                type={games[title].type}/>)}
            <a href="https://forms.gle/GNnsZ3KwtWyDH16d6"><div className="bpsb_p">Don't see a game you like? Request one!</div></a>
        </div>
        <div id="bp_contents">
            <div className="banner" style={{
                ...selectedGame.gdata.customBannerCSS?selectedGame.gdata.customBannerCSS:null,
                "backgroundImage": `url("/assets/bp_assets/gbanner/${selectedGame.gdata.id}.png")`,
            }}></div>
            <div className="actionbar">
                <h1>{selectedGame.title}</h1>
                <button className="playButton" onClick={()=>{OpenGame(selectedGame.gdata, selectedGame.title);}}>Play ▶</button>
            </div>
            <h2>System Requirements</h2>
            <ul>
                <li>{[
                    "2 Core 2.3GHz",
                    "4 Core 4.3GHz",
                    "1 Core 50KHz",
                    "8 Core 5GHz",]
                    [Math.floor(Math.random()*4)]}</li>
                <li>{[
                    "4Gb VRAM",
                    "8Gb VRAM",
                    "2Gb VRAM",
                    "1Gb VRAM"]
                    [Math.floor(Math.random()*4)]}</li>
                <li>{[
                    "4Gb RAM",
                    "8Gb RAM",
                    "2Gb RAM",
                    "1Gb RAM"]
                    [Math.floor(Math.random()*4)]}</li>
                <li>{[
                    "50Gb Drive Capacity",
                    "100Mb Drive Capacity",
                    "10Gb Drive Capacity",
                    "500Mb Drive Capacity",]
                    [Math.floor(Math.random()*4)]}</li>
            </ul>
        </div>
    </div>);
}
export default BeanpoweredGui;