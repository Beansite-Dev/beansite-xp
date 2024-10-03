import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
export const GameHost=({gdata,gname})=>{
    /* const navigate=useNavigate();
    useEffect(()=>{
        if(gdata.type=="OpenInNewTab"){
            navigate(gdata.url);
        }
    },[]); */
    return(<>
        <Helmet>
            <title>{gname}</title>
            <link id="icon" rel="icon" type="image/svg+xml" href={`/assets/bp_assets/gicon/${gdata.id}.png`} />
        </Helmet>
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