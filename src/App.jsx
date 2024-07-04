import { Component, useEffect, useState } from 'react';
import { BeansiteXP, Window, SDK } from './sdk/sdk';
import "./stylesheets/style/App.css";
import { WelcomeSrc } from './mdsrc';

class App extends Component {
  constructor(){
    super();
  }
  async componentDidMount(){
    SDK.hideWindow("testwin2");
  }
  render(){
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
    </>);
  }
}
export default App;
