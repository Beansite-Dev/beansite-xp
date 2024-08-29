import { useState,useEffect } from "react";
import { debug } from "../../App";
import { useDispatch, useSelector } from 'react-redux';
import { createCommand } from "../store/cmdccslice";
import { Window } from "./Window";
const BeanShell=()=>{
    const bs_v="1.4";
    const[log,setLog]=useState([
        ["log","M1dnight Beanshell"],
        ["log","Copyright (C) M1dnight Corporation. All rights reserved."],
        ["newline"],
    ]);
    const Log=({data})=>{
        return(data[0]=="newline"?<br/>:<><p className={data[0]}>{data[1]}</p><br/></>)
    }
    const dispatch=useDispatch();
    const customCommands=useSelector((state)=>state.cmd_custom_commands.value);
    const bs_io={
        log:(str)=>{setLog([...log,["log",str]]);}, //! problematic for some reason idk why
        success:(str)=>{setLog([...log,["success",str]]);},
        rainbow:(str)=>{setLog([...log,["rainbow",str]]);},
        error:(str)=>{setLog([...log,["error",str]]);},
        logml:(strArr)=>{setLog(log.concat(strArr));},
        newline:()=>{setLog([...log,["newline"]]);},
        valid:["log","error","success","rainbow"],
    };
    (debug)?useEffect(()=>{console.log(log);},[log]):null;
    useEffect(()=>{
        //sdk test
        dispatch(createCommand({
            "name":"beanshell",
            "callback":(data)=>{
                if(data[1]=="--version"){
                    bs_io.logml([
                        ["log",`Beanshell Version: v${bs_v}`],
                        ["newline"]
                    ]);
                }else if(!data[1]){
                    bs_io.logml([
                        ["log","Welcome to Beanshell"],
                        ["log","To get started, run `help`"],
                    ]);
                }
            }
        }));
    },[]);
    const EvalInput=(input)=>{
        const command=(input.toLowerCase()).split(/ +(?=(?:(?:[^"]*"){2})*[^"]*$)/g);
        // console.log(command);
        // bs_io.logml([["log",`c: ${input}`],["newline"]]);
        switch(command[0]){
            case "help":
                bs_io.logml([
                    ["log","All Commands:"],
                    ["log","- help"],
                    ["log","- echo -msg:str -type:LogType"],
                    ["log","- help:fun"],
                    ["newline"]
                ]);break;
            case "echo":
                bs_io[command[2]&&bs_io.valid.includes(command[2])?
                    command[2]:"log"](command[1].substring(1,command[1].length-1));break;
            case "help:fun":
                bs_io.logml([
                    ["log","All Commands"],
                    ["log","- lsd"],
                    ["newline"]
                ]);break;
            case "lsd":
                bs_io.logml([
                    ["newline"],
                    ["log","lsd mode enabled"],
                    ["newline"],
                ]);
                /* var bxpguis=document.getElementById("root").style;
                bxpguis.setProperty('--rand1', Math.random());
                bxpguis.setProperty('--rand2', Math.random());
                bxpguis.setProperty('--rand3', Math.random());
                bxpguis.setProperty('--rand4', Math.random()); */
                document.getElementById("lsdFilter1").classList.add("lsd");
                document.getElementById("lsdFilter2").classList.add("lsd-s");
                document.getElementById("lsdFilter3").classList.add("lsd-l");
                break;
            default:
                //! depricated: breaks error detection
                // customCommands.map((customCommandData)=>{
                    // if(customCommandData.name=command[0]){
                        // customCommandData.callback();
                        // return({"exitCode":0,});
                    // }
                // });
                if(customCommands.findIndex((cc)=>cc.name===command[0])!=-1){
                    customCommands[
                        customCommands.findIndex((cc)=>cc.name===command[0])]
                            .callback(command);
                }else{
                    bs_io.logml([
                        ["error",`${command[0]} : The term '${command[0]}' is not recognized. please check the spelling and try again.`],
                        ["error",`At line:1 char:1`],
                        ["error",`+ ${command[0]}`],
                        ["error",`+ ${("~").repeat(command[0].length)}`],
                        // ["error",`    + ObjectNotFound:  (${command[0]}:String) [], CommandNotFoundException`],
                        ["newline"],]);
                }
        }
    }
    const runCommand=(e,command)=>{
        e.value="";
        e.scrollTop=e.scrollHeight;
        EvalInput(command);
    }
    return(<Window 
        size={{
            "height": "38vmin",
            "width": "58vmin"}} 
        pos={{
            "x":["left","15vmin"],
            "y":["top","15vmin"],}}
        includeTitlebarOptions={{
            "min": true,
            "max": true,
            "close": true,}}
        id="beanshell"
        title="Beanshell"
        icon="/icons/xp/Command Prompt.png"
        closed>
        <div id="cmd">
            {log.map((data,index)=><Log key={index} data={data}/>)}
            <p>C:\ <input id="cmd_input" onKeyDown={(e)=>{
                if(e.key=="Enter"){runCommand(e.target,e.target.value)}}}></input></p><br/>
        </div>
    </Window>)
}
export default BeanShell;