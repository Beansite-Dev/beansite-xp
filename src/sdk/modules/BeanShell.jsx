import { useState,useEffect } from "react";
import { debug } from "../../App";
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
        success:(str)=>{setLog([...log,["success",str]]);},
        rainbow:(str)=>{setLog([...log,["rainbow",str]]);},
        error:(str)=>{setLog([...log,["error",str]]);},
        logml:(strArr)=>{setLog(log.concat(strArr));},
        newline:()=>{setLog([...log,["newline"]]);},
        valid:["log","error","success","rainbow"],
    };
    (debug)?useEffect(()=>{console.log(log);},[log]):null;
    const EvalInput=(input)=>{
        const command=(input.toLowerCase()).split(/ +(?=(?:(?:[^"]*"){2})*[^"]*$)/g);
        // console.log(command);
        // bs_io.log(`c: ${input}`);
        switch(command[0]){
            case "help":
                bs_io.logml([
                    ["log","All Commands:"],
                    ["log","- help"],
                    ["log","- echo -msg:str -type:LogType"],
                    ["newline"]
                ]);break;
            case "echo":
                bs_io[command[2]&&bs_io.valid.includes(command[2])?
                    command[2]:"log"](command[1].substring(1,command[1].length-1));break;
            default:
                bs_io.logml([
                    ["error",`${command[0]} : The term '${command[0]}' is not recognized. please check the spelling and try again.`],
                    ["error",`At line:1 char:1`],
                    ["error",`+ ${command[0]}`],
                    ["error",`+ ${("~").repeat(command[0].length)}`],
                    // ["error",`    + ObjectNotFound:  (${command[0]}:String) [], CommandNotFoundException`],
                    ["newline"],]);
        }
    }
    const runCommand=(e,command)=>{
        e.value="";
        e.scrollTop=e.scrollHeight;
        EvalInput(command);
    }
    return(<div id="cmd">
        {log.map((data,index)=><Log key={index} data={data}/>)}
        <p>C:\ <input id="cmd_input" onKeyDown={(e)=>{
            if(e.key=="Enter"){runCommand(e.target,e.target.value)}}}></input></p><br/>
    </div>)
}
export default BeanShell;