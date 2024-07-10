import { Component, useEffect, useState } from 'react';
import { BeansiteXP, Window, WinUtils, waitForElm, generateId } from './sdk/sdk';
import "./stylesheets/style/App.css";
import { WelcomeSrc, DebugMenuSrc } from './mdsrc';
import BeanpoweredGui from './beanpowered/bpgui';
import { useDispatch, useSelector } from 'react-redux';
import { createNotification } from './sdk/sdk';

const debug=true;
const release_data={
  "version":"v0.5.2",
  "comment":"idek",
  "features_added":[],
  "games_added":[],
  "games_removed":[]
};

const App=()=>{
  const dispatch=useDispatch();
  useEffect(()=>{
    // WinUtils.hideWindow("beanpowered");
    // dispatch(createNotification({
    //   "title": "test01",
    //   "id": generateId(10),
    // }));
  },[])
  return(<>
    <BeansiteXP>
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
        callbacks={{
          beforeWindowClose:()=>{
            console.log("closing window");},
          beforeWindowMinimize:()=>{
            console.log("minmizing window");},
          beforeWindowMaximize:()=>{
            console.log("maximizing window");},
          beforeWindowUnmaximize:()=>{
            console.log("unmaximizing window");},
        }}
        id="welcome"
        title="Welcome"
        icon="/icons/xp/Information.png"
        markdownMode
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
          callbacks={{
            beforeWindowClose:()=>{
              console.log("closing window");},
            beforeWindowMinimize:()=>{
              console.log("minmizing window");},
            beforeWindowMaximize:()=>{
              console.log("maximizing window");},
            beforeWindowUnmaximize:()=>{
              console.log("unmaximizing window");},
          }}
          id="debugMenu"
          title="Debug Menu"
          icon="/icons/xp/Services.png"
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
          "y":["top","5vmin"],}}
        includeTitlebarOptions={{
          "min": true,
          "max": true,
          "close": true,}}
        callbacks={{
          beforeWindowClose:()=>{
            console.log("closing window");},
          beforeWindowMinimize:()=>{
            console.log("minmizing window");},
          beforeWindowMaximize:()=>{
            console.log("maximizing window");},
          beforeWindowUnmaximize:()=>{
            console.log("unmaximizing window");},
        }}
        id="beanpowered"
        title="Beanpowered"
        icon="/icons/bp.png">
          <BeanpoweredGui />
      </Window>
    </BeansiteXP>
  </>);
}
export default App;
