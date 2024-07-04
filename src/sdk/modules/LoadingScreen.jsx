import tips from "../../assets/tips";
import { useEffect, useState } from "react";
const LoadingScreen=()=>{
    const shuffle = (array) => { 
        for (let i=array.length-1;i>0;i--) { 
          const j=Math.floor(Math.random()*(i + 1)); 
          [array[i],array[j]]=[array[j],array[i]]; 
        } return array; 
    };
    const shuffledTips=shuffle(tips);
    let i=0;
    const[tip,setTip]=useState(shuffledTips[i]);
    const tipsInterval=setInterval(()=>{
        i++;setTip(shuffledTips[i]);},5000);
    useEffect(() => {
        const onPageLoad=()=>{
            if(document.getElementById("loading")){
                setTimeout(()=>{console.log("loaded")},1000);
                clearInterval(tipsInterval);
                document.getElementById("loading").classList.add("fadeout");
                setTimeout(()=>{document.getElementById("loading").style.display="none";},1000);
            }
            if(!document.getElementById("theme")){
                let theme=document.createElement("link");
                theme.id="theme";
                theme.rel="stylesheet";
                theme.href="/themes/style/classic.css"; //default
                document.head.appendChild(theme);
            }
        };
        if (document.readyState === 'complete') {onPageLoad();} else {
            window.addEventListener('load', onPageLoad, false);
            return () => window.removeEventListener('load', onPageLoad);
        }
    },[]);
    return(<div id="loading">
        <div id="loadingIcon"></div>
        <div id="loadingBar">
            <div id="loadingIcons">█ █ █ █ █ █</div>
        </div>
        <p id="loadingTips">{tip}</p>
    </div>);
}
export default LoadingScreen;