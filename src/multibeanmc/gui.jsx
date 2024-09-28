import { useState, useEffect } from "react";
import { mcv } from "./assets/mcv";
import { generateId } from "../sdk/sdk";
export const MultibeanMC_GUI=()=>{
    const [selectV,setSelectV]=useState({
        title:"Eaglercraft 1.8.8",
        data:mcv["Eaglercraft 1.8.8"],
    });
    const OpenGame=({url,title})=>{
        window.open(url,title,'width=800,height=600');}
    const MCV=({ 
        title,
        data,
    })=>{
        return(<>
            <div className="mbmc_mcv" id={`${data.id}_${generateId(10)}`} onClick={(e)=>{
                e.preventDefault();
                setSelectV({title,data,});
            }}>
                <div className="icon" style={{
                        backgroundImage:`url("${data.icon}")`,
                    }}></div>
                <div className="text">{title}</div>
            </div>
        </>);
    }
    return(<>
        <div id="mbmc_gw">
            <div id="mbmc_sb">
                <div className="iw">
                    <div id="icon" style={{
                        backgroundImage:`url("${selectV.data.icon}")`,
                    }}></div>
                </div>
                <h1 className="vn">{selectV.title}</h1>
                <button id="pbtn" onClick={(e)=>{
                    e.preventDefault();
                    OpenGame({url:selectV.data.url,title:selectV.title});
                }}>Play</button>
            </div>
            <div id="mbmc_c">
                <div className="catagorywrapper" id="VanillaPacks">
                    {Object.keys(mcv)
                        .filter((name)=>mcv[name].type==="vanilla")
                        .map((mcvn,indx)=>
                            <MCV key={mcv[mcvn].id}title={mcvn}data={mcv[mcvn]}/>)}
                </div>
                <div className="catagorywrapper" id="ModdedPacks">
                    {Object.keys(mcv)
                        .filter((name)=>mcv[name].type==="modded")
                        .map((mcvn,indx)=>
                            <MCV key={mcv[mcvn].id}title={mcvn}data={mcv[mcvn]}/>)}
                </div>
            </div>
        </div>
    </>);
}