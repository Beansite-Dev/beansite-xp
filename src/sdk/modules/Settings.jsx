import { Window } from "./Window";
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, setSafeGraphics, setBackground, setBackgroundFit } from "../store/settingsslice";
import { useEffect } from "react";
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
    },[])
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
                    dispatch(setSafeGraphics(e.target.checked));}}></input></label><br/><br/>
            <h3>Personalization:</h3>
            <label>Theme:<span>&nbsp;</span>
                <select onChange={(e)=>{
                    dispatch(setTheme(e.target.value));}}>
                    <option value="classic">Classic</option>
                    <option value="dark">Dark (EXPERIMENTAL !!!)</option>
                </select>
            </label><br/>
            <label>Background Image:<span>&nbsp;</span>
                <label htmlFor="bgupload" className="imageUpload">Upload Image</label>
                <input id="bgupload" type="file" onChange={(e)=>{
                    dispatch(setBackground(e.target.files[0]));}} />
            </label><br/>
            <label>Background Fit:<span>&nbsp;</span>
                <select onChange={(e)=>{
                    dispatch(setBackgroundFit(e.target.value));}}>
                    <option value="cover">Cover</option>
                    <option value="contain">Fit</option>
                </select>
            </label><br/>
            
    </Window>);
}
export default Settings;