import notificationslice from "../store/notificationslice";
import { useSelector, useDispatch } from 'react-redux';
import store from '../store/store';
import { createNotification } from "../store/notificationslice";
import { Component, useEffect, useRef, useState } from "react";
import { generateId, timeout } from "./lib";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const Notification=({ title, id, notification })=>{
    const nodeRef=useRef(null);
    return(
        <CSSTransition 
            classNames="notification-ani"
            timeout={500} 
            in={true}
            unmountOnExit
            nodeRef={nodeRef}
            onEnter={()=>{}}
            onExited={()=>{}}>
            <div 
                className="notification" 
                id={id}>
                <h1>{title}</h1>
            </div>
    </CSSTransition>)
}
const NotificationSystem=()=>{
    const notification=useSelector((state)=>state.notifications.value);
    const dispatch=useDispatch();
    return(<TransitionGroup component="div" id="notiwrapper">
        {Object.keys(notification).map((notiTitle,index)=>
            <Notification 
                notification={notification}
                key={notiTitle}
                title={notiTitle}
                id={notification[notiTitle].id}/>)}
    </TransitionGroup>)
}
export default NotificationSystem;