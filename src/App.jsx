import { useState } from 'react';
import { SDK } from './sdk/sdk';
import "./stylesheets/style/App.css";
const App=()=>{
  return(<>
    <SDK.BeansiteXP>
      <SDK.Window 
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
      id="testwin"
      title="Test Window"
      icon="/icons/xp/Command Prompt.png">
          <h1>Hello World!</h1>
          <button id="button">Press Me!</button>
      </SDK.Window>
    </SDK.BeansiteXP>
  </>)
}
export default App;