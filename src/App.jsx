import { Component, useEffect, useState } from 'react';
import BeansiteXP, { Window, WinUtils, waitForElm, generateId } from './sdk/sdk';
import "./stylesheets/style/App.css";
import { WelcomeSrc, DebugMenuSrc } from './mdsrc';
import BeanpoweredGui from './beanpowered/bpgui';
import { useDispatch, useSelector } from 'react-redux';
import { createNotification } from './sdk/sdk';
import { Explorer } from "./sdk/modules/Explorer"
import BeanShell from './sdk/modules/Beanshell';
import FireBean from './firebean/firebean';
import config from './sdk/beansite.config';
import Settings from './sdk/modules/Settings';

export const debug=config.debugMode;
const release_data={
  "version":"v0.10.2",
  "date":"8/6/24",
  "comment":"LOTS of stuff",
  "features_added":[
    "Added Settings Savings",
    "Added Settings Reset",
    "Added Themes: Green, Pink",
    "Added Custom CSS",
    "Added Paint",
  ],
  "games_added":[
  ],
  "games_removed":[
  ]
};
const App=()=>{
  const dispatch=useDispatch();
  useEffect(()=>{
    // WinUtils.hideWindow("gameloader"); //!depricated
    // WinUtils.hideWindow("beanpowered");
    // dispatch(createNotification({
    //   "title": "test01",
    //   "id": generateId(10),
    // }));
  },[]);
  const[glTitle,setGlTitle]=useState(`Gameloader`);
  return(<>
    <BeansiteXP 
      config={config}
      startMenuShortcuts={[
        {
          "title":"Welcome",
          "icon":"/icons/xp/Information.png",
          "win_id":"welcome",
        },{
          "title":"Beanpowered",
          "icon":"/icons/bp.png",
          "win_id":"beanpowered",
        },{
          "title":"Explorer",
          "icon":"/icons/xp/Explorer.png",
          "win_id":"explorer",
        },{
          "title":"Beanshell",
          "icon":"/icons/xp/Command Prompt.png",
          "win_id":"beanshell",
        },{
          "title":"Settings",
          "icon":"/icons/xp/Additional Settings.png",
          "win_id":"settings",
        },{
          "title":"FireBean",
          "icon":"/assets/firebean/firebean.png",
          "win_id":"firebean",
        },{
          "title":"Paint",
          "icon":"/icons/xp/Paint.png",
          "win_id":"paint",
        },
      ]}>
      <Window 
        // customLayer="549"
        size={{
          "height": "38vmin",
          "width": "58vmin"}} 
        pos={{
          "x":["left","calc(50% - (58vmin / 2) + 10vmin)"],
          "y":["top","calc(50% - (38vmin / 2) - 48px)"],}}
        includeTitlebarOptions={{
          "min": true,
          "max": true,
          "close": true,
        }}
        id="welcome"
        title="Welcome"
        icon="/icons/xp/Information.png"
        markdownSource={WelcomeSrc}>
          <button 
            className='button1'
            onClick={()=>WinUtils.openWindow("beanpowered")}>
              Play games on Beanpowered</button><br/>
          <br/><hr/>
          <footer>
            M1dnightDev (c) 2024 | Made with {`<3`} in NJ<br/>
            <a href="https://github.com/Beansite-Dev">Github</a> | <a href="https://github.com/m1dnight-ofcl">Personal Github</a> | <a href="https://youtube.com/@m1dnightdev">Youtube</a> | <a href="https://twitter.com/@m1dnightdev">Twitter</a> | <a href="https://tiktok.com/@m1dnightdev">TikTok</a>
          </footer>
      </Window>
      {debug?<>
        <Window
          size={{
            "height": "38vmin",
            "width": "58vmin"}} 
          pos={{
            "x":["left","5vmin"],
            "y":["top","calc(100% - (5vmin + 48px + 38vmin))"],}}
          includeTitlebarOptions={{
            "min": true,
            "max": true,
            "close": true,}}
          id="debugMenu"
          title="Debug Menu"
          icon="/icons/xp/Services.png"
          closed
          markdownSource={DebugMenuSrc}>
            <button 
              className='button1'
              onClick={()=>
                dispatch(createNotification({
                  "title": generateId(5),
                  "id": generateId(10),
                }))}>createNotification</button>
        </Window>
      </>:null}
      <Window
        size={{
          "height": "38vmin",
          "width": "58vmin"}} 
        pos={{
          "x":["left","5vmin"],
          "y":["top","calc(100% - (5vmin + 48px + 38vmin))"],}}
        includeTitlebarOptions={{
          "min": true,
          "max": true,
          "close": true,}}
        id="changelog"
        title="Changelog"
        icon="/icons/xp/Services.png">
          <h1>{`What's New - ${release_data.version} - ${release_data.date}`}</h1>
          <p>{release_data.comment}</p>
          <ul>
            {release_data.features_added.map((data,index)=><li key={index}>{data}</li>)}
            <li>Games Added:</li>
            <ul>{release_data.games_added.length!=0?release_data.games_added.map((data,index)=><li key={index}>{data}</li>):<li>None :(</li>}</ul>
            <li>Games Removed:</li>
            <ul>{release_data.games_removed.length!=0?release_data.games_removed.map((data,index)=><li key={index}>{data}</li>):<li>None :)</li>}</ul>
          </ul>
      </Window>
      <Window 
        size={{
          "height": "38vmin",
          "width": "58vmin"}} 
        pos={{
          "x":["left","5vmin"],
          "y":["top","5vmin"],}}
        includeTitlebarOptions={{
          "min": true,
          "max": true,
          "close": true,}}
        id="beanpowered"
        title="Beanpowered"
        icon="/icons/bp.png">
          <BeanpoweredGui  setGlTitle={setGlTitle} />
      </Window>
      <Window 
        size={{
          "height": "50dvh",
          "width": "50dvw"}} 
        pos={{
          "x":["left","calc(50dvw - (50dvw / 2))"],
          "y":["top","calc(50dvh - (50dvh / 2))"],}}
        includeTitlebarOptions={{
          "min": true,
          "max": true,
          "close": true,}}
        callbacks={{
          beforeWindowClose:()=>{
            console.log("killing game process");
            document.getElementById("gl_frame").setAttribute("src","");},
        }}
        id="gameloader"
        closed
        title={glTitle}
        icon="/icons/xp/Game Controller.png">
          <iframe id="gl_frame" />
      </Window>
      <Explorer />
      <Window 
        size={{
          "height": "38vmin",
          "width": "58vmin"}} 
        pos={{
          "x":["left","15vmin"],
          "y":["top","15vmin"],}}
        includeTitlebarOptions={{
          "min": true,
          "max": true,
          "close": true,}}
        id="beanshell"
        title="Beanshell"
        icon="/icons/xp/Command Prompt.png"
        closed>
          <BeanShell />
      </Window>
      <FireBean />
      <Settings />
      <Window 
        size={{
          "height": "38vmin",
          "width": "58vmin"}} 
        pos={{
          "x":["left","30vmin"],
          "y":["top","30vmin"],}}
        includeTitlebarOptions={{
          "min": true,
          "max": true,
          "close": true,}}
        id="paint"
        title="Paint"
        icon="/icons/xp/Paint.png"
        closed>
          <iframe src="https://jspaint.app/"  />
      </Window>
    </BeansiteXP>
  </>);
}
export default App;
