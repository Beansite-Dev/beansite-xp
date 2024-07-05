import React, { useState, useEffect } from "react";
import "./style/style.css";
import games from "./assets/games";
const BeanpoweredGui=(props)=>{
    const Item=({ title, url, id, type, index })=>{
        return(<div 
            className="item" 
            style={{
                "borderBottom":!(index>=Object.keys(games).length-1)?
                    "1px #515171 solid":"none"
            }}>
            <h1>{title}</h1>
        </div>);
    }
    return(<div id="bp_gui">
        <div id="bp_wrapper">
            <h1>Welcome to Beanpowered</h1>
            <hr/>
            <div className="itemWrapper">
                {Object.keys(games).map((title,index)=><Item 
                    key={index}
                    index={index}
                    title={title}
                    url={games[title].url}
                    id={games[title].id}
                    type={games[title].type}/>)}
            </div>
        </div>
    </div>);
}
export default BeanpoweredGui;