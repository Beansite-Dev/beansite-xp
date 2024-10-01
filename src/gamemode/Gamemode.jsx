import "./style/style.css";
import games from "../beanpowered/assets/games";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
export const Gamemode=({})=>{
    useEffect(()=>{
        /* ["rtxp","h"].map((btnid)=>{
            document.getElementById(`gmn_${btnid}`).addEventListener("click",(e)=>{
                e.preventDefault();
            })
        }); */
    },[]);
    const Game=({
        title,
        gdata
    })=>{
        return(<>
            <div className="gm_game">

            </div>
        </>);
    }
    return(<>
        <Helmet>
            <title>Beansite - Game Mode</title>
            <link id="icon" rel="icon" type="image/svg+xml" href="/assets/favicon_modern.png" />
        </Helmet>
        <nav>
            <div id="logo"></div>
            <a href="/"><button className="navbtn" id="gmn_rtxp">Return to XP</button></a>
            <a href="/g"><button className="navbtn active" id="gmn_h">Home</button></a>
        </nav>
        <div id="gm_uiw">
            {Object.keys(games).map((gname)=><Game 
                key={btoa(gname)} 
                gdata={games[gname]}
                gname={gname} />)}
        </div>
    </>);
}