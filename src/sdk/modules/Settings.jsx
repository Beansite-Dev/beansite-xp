import { Window, WinUtils } from "./Window";
import { useDispatch, useSelector } from 'react-redux';
import { 
    setTheme, 
    setSafeGraphics, 
    setBackground, 
    setBackgroundFit,
    setSettings,
    setCustomCss,
    setExperimentalMode,
} from "../store/settingsslice";
import { getBase64, dataURItoBlob } from "./lib";
import { useEffect } from "react";
import { debug } from "../../App";
const Settings=(props)=>{
    const settings=useSelector((state)=>state.settings.value);
    const dispatch=useDispatch();
    useEffect(()=>{
        if(!document.getElementById("theme")){
            let theme=document.createElement("link");
            theme.id="theme";
            theme.rel="stylesheet";
            theme.href="/themes/style/classic.css"; //default
            document.head.appendChild(theme);
        }
    },[]);
    useEffect(()=>{
        // if(debug)console.log(`updated settings ${JSON.stringify(settings)}`);
        localStorage.setItem("mbxpSettings",JSON.stringify(settings));
        // theme update script
        document.getElementById("theme")
          .setAttribute("href",`/themes/style/${settings.theme}.css`);
        var theme=WinUtils.getTheme(settings);
        for(let i=0;i<document.getElementsByClassName("max").length;i++){
          // console.log(document.getElementsByClassName("max")[i]); //debug
          document.getElementsByClassName("max")[i].setAttribute("style",
            `background-image: url("/icons/${theme}/Maximize.png");`)
        }
        // safeGraphics
        document.getElementById("root")
            .classList[settings.safeGraphics?"add":"remove"]("SafeGraphics");
        // background image
        // console.log(settings.backgroundImage); //debug
        if(settings.backgroundImage)
            document.getElementById("bxpgui").style.backgroundImage=
                `url("${settings.backgroundImage}")`
        // background fit
        document.getElementById("bxpgui")
            .style.backgroundSize=`${settings.backgroundFit}`;
        // custom css
        if(!document.getElementById("customcss")){
            var cc=document.createElement("style");
            cc.id="customcss";
            document.head.appendChild(cc);
        }
        document.getElementById("customcss").innerHTML=settings.customCss;
        // experimental mode
        // nun
    },[settings]);
    return(<Window
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
        id="settings"
        title="Settings"
        closed
        icon="/icons/xp/Additional Settings.png">
            <h3>System:</h3>
            <label>Use Safe Graphics:<span>&nbsp;</span>
                <input type="checkbox" onChange={(e)=>{
                    dispatch(setSafeGraphics(e.target.checked));}}
                    defaultChecked={settings.safeGraphics}></input></label><br/>
            <label>Experimental Mode (Unstable):<span>&nbsp;</span>
                <input type="checkbox" onChange={(e)=>{
                    dispatch(setExperimentalMode(e.target.checked));}}
                    defaultChecked={settings.experimentalMode}></input></label><br/>
            <br/>
            {settings.experimentalMode?<>
                <h3>Experimental Settings:</h3>

                <h4>Filters:</h4>
                <div className="rangeWrapper">
                  <label htmlFor="hueSlider_label">Hue:</label>
                  <label htmlFor="hueSlider_min">-180deg</label>
                  <input 
                    className="slider1" 
                    id="hueSlider" 
                    type="range" 
                    min="-180" 
                    max="180" 
                    defaultValue="0" 
                    onChange={(e)=>{
                        document.getElementById("hueFilter").style.backdropFilter=`hue-rotate(${e.target.value}deg)`;
                    }}/>
                  <label htmlFor="hueSlider_max">180deg</label>
                  <label 
                    style={{color:"red",cursor:"pointer"}}
                    onClick={()=>{
                        document.getElementById("hueSlider").value=0;
                        document.getElementById("hueFilter").style.backdropFilter=null;
                    }}>Reset</label>
                </div>

                <div className="rangeWrapper">
                  <label htmlFor="blurSlider_label">Blur:</label>
                  <label htmlFor="blurSlider_min">0px</label>
                  <input 
                    className="slider1" 
                    id="blurSlider" 
                    type="range" 
                    min="0" 
                    max="10" 
                    defaultValue="0" 
                    onChange={(e)=>{
                        document.getElementById("blurFilter").style.backdropFilter=`blur(${e.target.value}px)`;
                    }}/>
                  <label htmlFor="blurSlider_max">10px</label>
                  <label 
                    style={{color:"red",cursor:"pointer"}}
                    onClick={()=>{
                        document.getElementById("blurSlider").value=0;
                        document.getElementById("blurFilter").style.backdropFilter=null;
                    }}>Reset</label>
                </div>

                <div className="rangeWrapper">
                  <label htmlFor="brightnessSlider_label">Brightness:</label>
                  <label htmlFor="brightnessSlider_min">0%</label>
                  <input 
                    className="slider1" 
                    id="brightnessSlider" 
                    type="range" 
                    min="0" 
                    max="200" 
                    defaultValue="100" 
                    onChange={(e)=>{
                        document.getElementById("brightnessFilter").style.backdropFilter=`brightness(${e.target.value}%)`;
                    }}/>
                  <label htmlFor="brightnessSlider_max">200%</label>
                  <label 
                    style={{color:"red",cursor:"pointer"}}
                    onClick={()=>{
                        document.getElementById("brightnessSlider").value=100;
                        document.getElementById("brightnessFilter").style.backdropFilter=null;
                    }}>Reset</label>
                </div>

                <div className="rangeWrapper">
                  <label htmlFor="contrastSlider_label">Contrast:</label>
                  <label htmlFor="contrastSlider_min">0%</label>
                  <input 
                    className="slider1" 
                    id="contrastSlider" 
                    type="range" 
                    min="0" 
                    max="200" 
                    defaultValue="100" 
                    onChange={(e)=>{
                        document.getElementById("contrastFilter").style.backdropFilter=`contrast(${e.target.value}%)`;
                    }}/>
                  <label htmlFor="contrastSlider_max">200%</label>
                  <label 
                    style={{color:"red",cursor:"pointer"}}
                    onClick={()=>{
                        document.getElementById("contrastSlider").value=100;
                        document.getElementById("contrastFilter").style.backdropFilter=null;
                    }}>Reset</label>
                </div>

                <div className="rangeWrapper">
                  <label htmlFor="saturateSlider_label">Saturate:</label>
                  <label htmlFor="saturateSlider_min">0%</label>
                  <input 
                    className="slider1" 
                    id="saturateSlider" 
                    type="range" 
                    min="0" 
                    max="200" 
                    defaultValue="100" 
                    onChange={(e)=>{
                        document.getElementById("saturateFilter").style.backdropFilter=`saturate(${e.target.value}%)`;
                    }}/>
                  <label htmlFor="saturateSlider_max">200%</label>
                  <label 
                    style={{color:"red",cursor:"pointer"}}
                    onClick={()=>{
                        document.getElementById("saturateSlider").value=100;
                        document.getElementById("saturateFilter").style.backdropFilter=null;
                    }}>Reset</label>
                </div>

                <div className="rangeWrapper">
                  <label htmlFor="invertSlider_label">Invert:</label>
                  <label htmlFor="invertSlider_min">0%</label>
                  <input 
                    className="slider1" 
                    id="invertSlider" 
                    type="range" 
                    min="0" 
                    max="100" 
                    defaultValue="0" 
                    onChange={(e)=>{
                        document.getElementById("invertFilter").style.backdropFilter=`invert(${e.target.value}%)`;
                    }}/>
                  <label htmlFor="invertSlider_max">100%</label>
                  <label 
                    style={{color:"red",cursor:"pointer"}}
                    onClick={()=>{
                        document.getElementById("invertSlider").value=0;
                        document.getElementById("invertFilter").style.backdropFilter=null;
                    }}>Reset</label>
                </div>
                
                {/* <h4>Other Experimental Settings</h4> */}

                <br/><p className="caption">
                    These settings don't save. They're purely experiments. Also, 
                    adding the save functionality would probably takes me months 
                    and a ton of code, so im js not gonna do it lmao<br/>
                    I mean, if they prove useful, maybe ill add em ;)
                </p><br/>
            </>:null}
            <h3>Personalization:</h3>
            <label>Theme:<span>&nbsp;</span>
                <select onChange={(e)=>{
                    dispatch(setTheme(e.target.value));}}
                    defaultValue={settings.theme}>
                    <option value="classic">Classic</option>
                    <option value="dark">Dark</option>
                    <option value="pink">Pink</option>
                    <option value="green">Green</option>
                </select>
            </label><br/>
            <label>Background Image:<span>&nbsp;</span>
                <label htmlFor="bgupload" className="imageUpload">Upload Image</label>
                <input id="bgupload" type="file" onChange={(e)=>{
                    var a=new FileReader();
                    var res;
                    a.onload=function(e){
                      res=e.target.result;
                    //   console.log(res); //debug
                      dispatch(setBackground(res));
                    }
                    a.readAsDataURL(e.target.files[0]);
                }}/>
            </label><br/>
            <label>Background Fit:<span>&nbsp;</span>
                <select onChange={(e)=>{
                    dispatch(setBackgroundFit(e.target.value));}}
                    defaultValue={settings.backgroundFit}>
                    <option value="cover">Cover</option>
                    <option value="contain">Fit</option>
                </select>
            </label><br/><br/>
            <h3>Custom CSS</h3>
            <textarea id="customcss_src"></textarea>
            <p className="caption">
                This is for people who are experienced with 
                web development and can write their own styling. 
                If you would like to learn, refrence <a href="https://www.w3schools.com/css/">this</a><span>&nbsp;</span>
                or copy-paste any premade styling be others.
            </p>
            <button onClick={(e)=>{
                e.preventDefault();
                dispatch(setCustomCss(document.getElementById("customcss_src").value));
            }} className="button1">Save Custom CSS</button>
            <br/><br/>
            <h1 className="danger">Danger Zone</h1>
            <button className="dangerButton" onClick={()=>{
                if(confirm("Are You Sure?")){
                    localStorage.clear();
                    window.location.reload();
                }
            }}>Reset Settings</button>
    </Window>);
}
export default Settings;