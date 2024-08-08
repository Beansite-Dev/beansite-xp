import { useEffect } from "react";
const BSoD=(props)=>{
    // console.log(props);
    return(<div id="bsod" onClick={()=>{
        if(globalThis.IN_DESKTOP_ENV)close();
        else window.location.reload();
    }}>
        <div id="bsodTextWrapper">
            A problem had been detected and Beansite has been shut down to prevent damages
            <br/><br/>
            {String(
                (props.errorData.errorData.stack)?
                props.errorData.errorData.stack:
                props.errorData.errorData[0])}
            {String(
                JSON.stringify(props.errorData.errorData.stack)?
                JSON.stringify(props.errorData.errorData.stack):
                JSON.stringify(props.errorData.errorData[1].componentStack
                )).replaceAll('"',"").split("\\n").map((data,index)=>
                <p style={{whiteSpace:"pre-wrap"}} key={index}>{data}</p>)}
            <div id="bsodHelpInfo">
                <br/><br/>
                Check to make sure any new hardware or software is properly installed. I this is a new installation, ask your hardware or software manufacturer for and Windows updates you might need.
                <br/><br/>
                If problems continue, disable or remove any newly installed hardware or software. Disable BIOS memory options such as caching or shadowing. If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select Advanced Startup Options, and then select Safe Mode.
                <br/><br/>
                Technical information:
                <br/><br/>
                *** STOP: 0x000000FE (0x00000008, 0x000000006, 0x00000009, 0x847075cc)
            </div>
        </div>
            <div id="bsodAsciiArt">
                
            </div>
    </div>)
}
export default BSoD;