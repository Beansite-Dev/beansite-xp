import { useState,useEffect } from "react";
const BeanShell=()=>{
    const[log,setLog]=useState([
        ["log","M1dnight Beanshell"],
        ["log","Copyright (C) M1dnight Corporation. All rights reserved."],
        ["newline"],
    ]);
    const Log=({data})=>{
        return(data[0]=="newline"?<br/>:<><p className={data[0]}>{data[1]}</p><br/></>)
    }
    const bs_io={
        log:(str)=>{setLog([...log,["log",str]]);},
        error:(str)=>{setLog([...log,["error",str]]);},
        logml:(strArr)=>{setLog(log.concat(strArr));},
    };
    useEffect(()=>{console.log(log);},[log]);
    const EvalInput=(input)=>{
        switch(input.toLowerCase()){
            case "help":
                bs_io.logml([
                    ["log","All Commands:"],
                    ["log","- help"],
                    ["log","- echo -msg:str -type:LogType"],
                    ["newline"]
                ]);break;
            default:
                bs_io.error("Unrecognized Command");
        }
    }
    return(<div id="cmd">
        {log.map((data,index)=><Log key={index} data={data}/>)}
        <p>C:\ <input id="cmd_input" onKeyDown={(e)=>{
            if(e.key=="Enter")EvalInput(e.target.value);}}></input></p>
    </div>)
}
export default BeanShell;