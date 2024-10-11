import { Component, useEffect, useState } from 'react';
import BeansiteXP, { Window, WinUtils, waitForElm, generateId } from './sdk/sdk';
import "./stylesheets/style/App.css";
import { WelcomeSrc } from './mdsrc';
import BeanpoweredGui from './beanpowered/bpgui';
import { useDispatch, useSelector } from 'react-redux';
import FireBean from './firebean/firebean';
import config from './beansite.config';
import ReactGA from 'react-ga4';
import { Helmet } from 'react-helmet-async';
import { useHotkeys, HotkeysProvider } from 'react-hotkeys-hook'
import { MultibeanMC } from './multibeanmc/MultibeanMC';
export const debug=config.debugMode;
const release_data={
  "version":"v1.9.1",
  "date":"10/2/24",
  "comment":"Planned features and many fixes",
  "features_added":[
    "Added Beancloaked",
    "Added Game Hosting",
    "Added Changelog Slideshow",
    "Planned Game Mode (like hahagames)",
    "Added Game Icons",
    "Fixed Window/WinUtil bugs",
    "Fixed Themeing bugs",
    "Fixed high drag radius",
    "Fixed weird css",
    "Added custom dark theme",
    "Allowed Beancloaked Hotkey Tweaking",
    // <>Added <a href="/g">Game Mode</a></>,
    "Added MultibeanMC (minecraft launcher for beansite)",
    "Added ability to play games in Full Screen",
    "Added Pranks",
  ],
  "games_added":[
    <>Tank Trouble <p className='reqtxt'> - Requested by geith</p></>,
    "Cluster Trucks",
    "Added all Henry Stickman Games",
    "Updated Riddle School games to use local ruffle emulator",
    <>Penalty Shooters 2 <p className='reqtxt'> - Requested by ChickenTenderMan84</p></>,
    <>Pokemon Gold <p className='reqtxt'> - Requested by grilledshrimp</p></>,
    // <>_g <p className='reqtxt'> - Requested by _u</p></>, // special request
  ],
  "games_removed":[
    
  ],
};
const App=()=>{
  const dispatch=useDispatch();
  useEffect(()=>{
    ReactGA.send({
      hitType:"pageview",
      page:"/",
      title:"Beansite XP: Home"
    });
  },[]);
  const[glTitle,setGlTitle]=useState(`Gameloader`);
  const[glIcon,setGlIcon]=useState(`/icons/xp/Game Controller.png`);
  const Shortcuts=[
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
    },{
      "title":"Beancloak",
      "icon":"/icons/xp/Padlock.png",
      "win_id":"beancloak",
    },{
      "title":"MultibeanMC",
      "icon":"/assets/mbmc/logo.png",
      "win_id":"mbmc",
    },
  ]
  const[beancloaked,setBeancloaked]=useState({
    title:"Beansite XP",
    icon:"beanxp_logo.png",
  });
  const[bcredir,setBcredir]=useState("https://google.com");
  const[bchotkey,setBchotkey]=useState("ctrl+k");
  useHotkeys(bchotkey,()=>{
    console.log("emergency key pressed");
    window.onbeforeunload=()=>{};
    location.href=bcredir;
  },{scopes:['mbxpgui']});
  return(<>
    <Helmet>
      <title>{beancloaked.title}</title>
      <link id="icon" rel="icon" type="image/svg+xml" href={`/assets/${beancloaked.icon}`} />
    </Helmet>
    <BeansiteXP 
      config={config}
      desktopShortcuts={Shortcuts}
      startMenuShortcuts={Shortcuts}>
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
          <div id="showcase_wrapper">
            <button id="sce_left" onClick={(e)=>{
              [document.getElementById("showcase")].map((showcase)=>{
                [document.getElementsByClassName("sce")[0]].map((sce)=>{
                  showcase.scrollBy(0-(sce.getBoundingClientRect().width+parseInt("2vmin")),0);
                });
              })
            }}>{`<`}</button>
            <button id="sce_right" onClick={(e)=>{
              [document.getElementById("showcase")].map((showcase)=>{
                [document.getElementsByClassName("sce")[0]].map((sce)=>{
                  showcase.scrollBy(sce.getBoundingClientRect().width+parseInt("2vmin"),0);
                });
              })
            }}>{`>`}</button>
            <div id="showcase">
              {/*---*/}
              <div id="sce_0" className="sce sce_0 mbmc_feature" onClick={(e)=>{e.preventDefault();WinUtils.openWindow("mbmc")}}></div>
              <div id="sce_1" className="sce sce_1 bc_feature" onClick={(e)=>{e.preventDefault();WinUtils.openWindow("beancloak")}}></div>
              {/* <div id="sce_2" className="sce sce_2"></div> */}
              {/* <div id="sce_3" className="sce sce_3"></div> */}
            </div>
          </div>
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
          <BeanpoweredGui  setGlTitle={setGlTitle} setGlIcon={setGlIcon} />
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
        icon={glIcon}>
          <iframe id="gl_frame" />
      </Window>
      <FireBean />
      <Window 
        size={{
          "height": "38vmin",
          "width": "58vmin"}} 
        pos={{
          "x":["left","20vmin"],
          "y":["top","20vmin"],}}
        includeTitlebarOptions={{
          "min": true,
          "max": true,
          "close": true,}}
        id="beancloak"
        closed
        title="Beancloak"
        icon="/icons/xp/Padlock.png">
          <div className='bc_head'>
            <div id='bc_icon'></div><h1>Beancloaked</h1>
          </div>
          <div className='bc_content'>
            <h3>Tab Settings:</h3>
            <p className='caption'>The settings for the tab's title and icon</p>
            <label>Preset: <select defaultChecked={JSON.stringify({
                title:"Beansite XP",
                icon:"beanxp_logo.png",
              })} onChange={(e)=>{
              setBeancloaked(JSON.parse(e.target.value));
            }}>
              <option value={JSON.stringify({
                title:"Beansite XP",
                icon:"beanxp_logo.png",
              })}>Beansite XP</option>  
              <option value={JSON.stringify({
                title:"Home",
                icon:"/beancloaked/icons/googleclassroom.png",
              })}>Google Classroom</option>  
            </select></label><br/>
            <h3>Emergency Key Settings</h3>
            <p className='caption'>
              Settigns for the emergency key, which can save you if a teacher walks behind 
              you.
            </p>
            <label>Redirect URL: <input type="text" defaultValue={bcredir} onChange={(e)=>{
              setBcredir(e.target.value);
            }}/></label>
            <label>Key Combination: <input type="text" defaultValue={bchotkey} onChange={(e)=>{
              setBchotkey(e.target.value);
            }}/></label>
            <p className='caption'>
              Please format your string as "ctrl + shift + alt + key" (all optional. you can set to whatever)
            </p>
          </div>
      </Window>
      <MultibeanMC/>
    </BeansiteXP>
  </>);
}
export default App;
