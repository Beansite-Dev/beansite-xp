import { Component, useEffect, useState } from 'react';
import { BeansiteXP, Window, WinUtils, waitForElm, generateId } from './sdk/sdk';
import "./stylesheets/style/App.css";
import { WelcomeSrc } from './mdsrc';
import BeanpoweredGui from './beanpowered/bpgui';
import { useDispatch, useSelector } from 'react-redux';
import { createNotification } from './sdk/sdk';

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
        size={{
          "height": "38vmin",
          "width": "58vmin"}} 
        pos={{
          "x":"calc(50% - (58vmin / 2))",
          "y":"calc(50% - (38vmin / 2) - 48px)",}}
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
          <button 
            className='button1'
            onClick={()=>
              dispatch(createNotification({
                "title": generateId(5),
                "id": generateId(10),
              }))}>
              Create Notification (for debug)</button>
          
          <br/><br/><hr/>
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
          "x":"5vmin",
          "y":"5vmin",}}
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
