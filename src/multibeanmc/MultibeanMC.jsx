import { Window } from "../sdk/sdk";
import "./style/style.css";
import { MultibeanMC_GUI } from "./gui";
export const MultibeanMC=()=>{
    return(<>
      <Window 
        size={{
          "height": "38vmin",
          "width": "58vmin"}} 
        pos={{
          "x":["left","25vmin"],
          "y":["top","25vmin"],}}
        includeTitlebarOptions={{
          "min": true,
          "max": true,
          "close": true,}}
        closed
        id="mbmc"
        title="MultibeanMC"
        icon="/assets/mbmc/logo.png">
            <MultibeanMC_GUI />
      </Window>
    </>);
}