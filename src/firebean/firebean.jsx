import "./style/style.css";
import { Window, WinUtils, generateId } from "../sdk/sdk";
import { useState, useEffect } from "react";
const FireBean=(props)=>{
    const[tabs,setTabs]=useState([
        // new tab example
        // {...NewTab,"id":generateId(10)},
        // url tab example
        // {
            // "title":"New Tab 2",
            // "icons":"",
            // "id":generateId(10),
            // "url":"https://example.com",
            // "type": "url",
            // "content":`https://example.com`
        // fallback test
        // },{
            // "title":"Fallback Test",
            // "icons":"",
            // "id":generateId(10),
            // "url":"https://example.com",
            // "type": "this will error",
            // "content":`https://example.com`
        // },
    ]);
    const UpdateTab=(tabData,newTabData)=>{
        const updatedTabs=tabs.map((tab,tabIndex) => {
            if(tabData===tab){
                return newTabData;
            }else{return tab;}
        });
        setTabs(updatedTabs);
    }
    const[contents,setContents]=useState("https://www.google.com/webhp?igu=1");
    const NewTab={
        "title":"New Tab",
        "icons":"",
        "id":null,
        "url":"https://www.google.com/",
        "type": "component",
        "content": "https://www.google.com/webhp?igu=1",
    };
    const[selectedTab,setSelectedTab]=useState({});
    const CreateNewTab=(e)=>{
        e?e.preventDefault():null;
        setTabs([
            {...NewTab,"id":generateId(10)},
        ]);
    }
    useEffect(()=>{
        CreateNewTab();
        setSelectedTab(tabs[0]);
    },[]);
    const Tab=({ tabData, index })=>{
        const CloseTab=(tabData)=>{
            setTabs(tabs.filter(data=>data!==tabData));
        }
        const SwitchTab=(e)=>{  
            e.preventDefault();
            document.getElementById("fb_urlinput").value=tabData.url;
            setContents(tabData.content);
            // switch(tabData.type){
                // case "component":{
                    // setContents(tabData);}break;
                // case "url":{
                    // setContents({"content":<>
                        {/* <iframe className="fb_url" src={tabData.content} /> */}
                    {/* </>});}break; */}
                // default:{
                    // setContents({"content":<>
                        {/* <h1 style={{color:"red"}}>TypeError: Content Type invalid</h1> */}
                    {/* </>});} */}
            // }
        }
        return(<div className="tab" onClick={(e)=>{SwitchTab(e);}}>
            <div className="icon"></div>
            <h1>{tabData.title}</h1>
            <button className="close" onClick={(e)=>{
                CloseTab(tabData)}}>x</button>
        </div>)
    }
    // useEffect(()=>{
    // },[]);
    return(<Window
        size={{
            "height": "38vmin",
            "width": "58vmin"}} 
        pos={{
            "x":["left","20vmin"],
            "y":["top","20vmin"],}}
        includeTitlebarOptions={{
            "min": true,
            "max": true,
            "close": true,}}
        id="firebean"
        title="FireBean"
        closed
        icon="/assets/firebean/favicon.png">
            <div id="firebean">
                <button id="fb_createNewTab" onClick={(e)=>{CreateNewTab(e)}}>+</button>
                <div id="fb_tab_bar">
                    {tabs.map((data,index)=><Tab tabData={data} index={index} key={data.id} />)}
                </div>
                <div id="fb_urlbar">
                    <button onClick={(e)=>{
                        e.preventDefault();
                        // alert("dont work yet :<");
                        // document.getElementById("fb_url")
                    }}>{`⌂`}</button>
                    {/* <button onClick={(e)=>{
                        e.preventDefault();
                        alert("dont work yet :<");
                        // document.getElementById("fb_url")
                    }}>{`>`}</button> */}
                    <input id="fb_urlinput" />
                    <button onClick={(e)=>{
                        e.preventDefault();
                        var inputval=document.getElementById("fb_urlinput").value;
                        if(inputval||
                            inputval.includes("https://")||
                            inputval.includes("http://")){
                            document.getElementById("fb_url").setAttribute("src",inputval);
                        }
                    }}>{`🔎︎`}</button>
                </div>
                <div id="fb_contents">
                    {/* {contents} */}
                    <iframe id="fb_url" src={contents} onLoad={(e)=>{
                        try{
                            e.target.contentWindow.location.href;
                            var oldSelectedTab=selectedTab;
                            setSelectedTab({...tabs[tabs.indexOf(selectedTab)],"contents":e.target.src});
                            setTabs(tabs.map((item,index)=>{
                                if(oldSelectedTab===item){
                                    return selectedTab;
                                }else{
                                    return item;
                                }
                            }));
                            console.log(oldSelectedTab,selectedTab);
                        }catch(error){
                            // console.error(`failed to load content:\n${
                                // (error.stack).split("\n")
                                    // .map((line=>{return `    ${line}\n`}))}`);
                        }
                    }}/>
                </div>
            </div>
    </Window>)
}
export default FireBean;