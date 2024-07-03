import { useEffect, useState } from 'react';
import { BeansiteXP, Window, SDK } from './sdk/sdk';
import "./stylesheets/style/App.css";
const App=()=>{
  // useEffect(()=>{
    // SDK.hideWindow("testwin1");
  // },[]);
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
        id="testwin"
        title="Test Window"
        icon="/icons/xp/Command Prompt.png">
          <h1>Hello World!</h1>
          <button id="button">Press Me!</button>
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
        id="testwin2"
        title="Test Window 2"
        icon="/icons/xp/Command Prompt.png">
          <h1>Hello World! 2</h1>
      </Window>
    </BeansiteXP>
  </>)
}
export default App;
