import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export const GameHost=({gdata})=>{
    /* const navigate=useNavigate();
    useEffect(()=>{
        if(gdata.type=="OpenInNewTab"){
            navigate(gdata.url);
        }
    },[]); */
    return(<>
        <style>{`
            iframe {
                height: 100dvh;
                width: 100dvw;
                outline: 0;
                border: 0;
                padding: 0;
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
            }
        `}</style>
        <iframe src={gdata.url} />
    </>);
}