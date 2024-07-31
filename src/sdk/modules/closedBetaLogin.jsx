import { useEffect, useState } from "react";
const ClosedBetaLogin=()=>{
    // access code should be firstname_lastname as 10 
    // char md5 hash with prefix "mbxp_ac_"
    // use https://www.md5hashgenerator.com
    const ValidAccessCodes=[
        "mbxp_ac_39139c401c", //tyle_vaz (me :>)
        "mbxp_ac_cdda47e4f3", //ethan_guantez
        "mbxp_ac_326dc5988d", //isa_aleman
        "mbxp_ac_f7cbcd7cf8", //rajeh_jbara
    ];
    return(<div id="ClosedBetaLogin">
        <div id="cbl_contentWrapper">
            <h1>Beansite XP Is in Closed Beta</h1>
            <hr/>
            <label>Temporary Access Code: <input id="cbl_tac" type="text"/></label>
            <p id="cbl_tac_invalid" style={{"display":"none"}}>Invalid Access Code</p>
            <button id="cbl_tac_submit" onClick={(e)=>{
                e.preventDefault();
                if(document.getElementById("cbl_tac").value&&
                ValidAccessCodes.includes(document.getElementById("cbl_tac").value)){
                    var elm=document.getElementById("ClosedBetaLogin");
                    elm.style.transition="2.5s";
                    elm.style.opacity="0";
                    elm.style.top="150%";
                }else{
                    document.getElementById("cbl_tac_invalid").style.display="block";
                }
            }}>Submit</button>
        </div>
    </div>)
};
export default ClosedBetaLogin;