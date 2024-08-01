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
    const NewTabGui=(props)=>{
        // return(<div className="fb_newtab">
        //     <div className="fb_logo"></div>
        //     <input type="text" id="fb_ntsearch" onKeyDown={(e)=>{
                // if(e.key=="Enter"){
                    // if((e.target.value).includes("http://")||
                    // (e.target.value).includes("https://")){
                    // setContents(<iframe 
                        // className="fb_url" 
                        // src={e.target.value} />);}
                    // else{
                        // setContents(<iframe 
                            // className="fb_url" 
                            // src={``} />)
                    // }
                // }
        //   }} />
        // </div>)
        return(<iframe id="fb_url" src="https://www.google.com/webhp?igu=1" />)
    }
    const[contents,setContents]=useState({"content":<NewTabGui/>});
    const NewTab={
        "title":"New Tab",
        "icons":"",
        "id":null,
        "url":"https://www.google.com/",
        "type": "component",
        "content":<NewTabGui />
    };
    const CreateNewTab=(e)=>{
        e?e.preventDefault():null;
        setTabs([
            ...tabs,
            {...NewTab,"id":generateId(10)},
        ]);
    }
    useEffect(()=>{
        CreateNewTab();
    },[]);
    const Tab=({ tabData, index })=>{
        const CloseTab=(tabData)=>{
            setTabs(tabs.filter(data=>data!==tabData));
        }
        const SwitchTab=(e)=>{  
            e.preventDefault();
            document.getElementById("fb_urlinput").value=tabData.url;
            switch(tabData.type){
                case "component":{
                    setContents(tabData);}break;
                case "url":{
                    setContents({"content":<>
                        <iframe className="fb_url" src={tabData.content} />
                    </>});}break;
                default:{
                    setContents({"content":<>
                        <h1 style={{color:"red"}}>TypeError: Content Type invalid</h1>
                    </>});}
            }
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
        // closed
        icon="/assets/firebean/favicon.png">
            <div id="firebean">
                <button id="fb_createNewTab" onClick={(e)=>{CreateNewTab(e)}}>+</button>
                <div id="fb_tab_bar">
                    {tabs.map((data,index)=><Tab tabData={data} index={index} key={data.id} />)}
                </div>
                <div id="fb_urlbar">
                    <button onClick={(e)=>{
                        e.preventDefault();
                        alert("dont work yet :<");
                        // document.getElementById("fb_url")
                    }}>{`<`}</button>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        alert("dont work yet :<");
                        // document.getElementById("fb_url")
                    }}>{`>`}</button>
                    <input id="fb_urlinput" />
                    <button>{`🔎︎`}</button>
                </div>
                <div id="fb_contents">
                    {contents.content}
                </div>
            </div>
    </Window>)
}
export default FireBean;