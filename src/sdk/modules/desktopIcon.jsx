import { WinUtils } from "./WinUtils";
export const DesktopIcon=({win_id,title,icon,beforeLaunch=()=>{}})=>{
    return(<>
        <div className="desktopShortcut" id={`${win_id}_deskicon`} onClick={(e)=>{
            e.preventDefault();
            beforeLaunch?beforeLaunch():null;
            WinUtils.openWindow(win_id);
        }}>
            <div className="icon" style={{backgroundImage:`url("${icon}")`}}></div>
            <h1>{title}</h1>
        </div>
    </>);
}