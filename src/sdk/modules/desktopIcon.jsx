import { WinUtils } from "./WinUtils";
export const DesktopIcon=({ win_id, title, icon })=>{
    return(<>
        <div className="desktopShortcut" id={`${win_id}_deskicon`}>
            <div className="icon" style={{backgroundImage:`url("${icon}")`}}></div>
            <h1>{title}</h1>
        </div>
    </>);
}