import ErrorBoundary from './modules/ErrorHandler.jsx';
import LoadingScreen from './modules/LoadingScreen.jsx';
import store from './store/store.jsx';
import { Provider } from 'react-redux';
import ShutdownScreen from './modules/shutdownScreen.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { HotkeysProvider } from 'react-hotkeys-hook';

const BeanXPRouter=(props)=>{
    useEffect(()=>{
        if(!location.hostname==="localhost"
            ||location.hostname==="127.0.0.1")
            window.onbeforeunload=function(e){
                var dialogText='Do you really want to close Beansite XP?';
                e.returnValue=dialogText;
                return dialogText;
        }
    },[]);
    return(<>
        <HotkeysProvider initiallyActiveScopes={['mbxpgui']}>
            <HelmetProvider>
                <ErrorBoundary>
                    <Provider store={store}>
                        <LoadingScreen />
                        <ShutdownScreen />
                        {props.children}
                    </Provider>
                </ErrorBoundary> 
            </HelmetProvider>
        </HotkeysProvider>
    </>)
}
export default BeanXPRouter;