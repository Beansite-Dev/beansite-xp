import { useState } from 'react'
import BeansiteXP, { Window } from './sdk/sdk'
import "./stylesheets/style/App.css";
const App=()=>{
  return(<>
    <BeansiteXP>
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
      id="testwin"
      title="Test Window"
      icon="/icons/xp/Command Prompt.png">
          <h1>Hello World!</h1>
      </Window>
    </BeansiteXP>
  </>)
}
export default App;