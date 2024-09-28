import "./style/style.css";
import games from "../beanpowered/assets/games";
import { useEffect } from "react";
export const Gamemode=({})=>{
    useEffect(()=>{
        /* ["rtxp","h"].map((btnid)=>{
            document.getElementById(`gmn_${btnid}`).addEventListener("click",(e)=>{
                e.preventDefault();
            })
        }); */
    },[]);
    return(<>
        <nav>
            <div id="logo"></div>
            <a href="/"><button className="navbtn" id="gmn_rtxp">Return to XP</button></a>
            <a href="/g"><button className="navbtn active" id="gmn_h">Home</button></a>
        </nav>
        <div id="gm_uiw">
        </div>
    </>);
}