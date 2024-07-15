import ErrorBoundary from './modules/ErrorHandler.jsx';
import LoadingScreen from './modules/LoadingScreen.jsx';
import store from './store/store.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShutdownScreen from './modules/shutdownScreen.jsx';

const BeanXPRouter=(props)=>{
    return(<>
        <ErrorBoundary>
            <Provider store={store}>
                <LoadingScreen />
                <ShutdownScreen />
                <BrowserRouter basename='/'>
                    <Routes>
                        <Route path="" element={<>{props.children}</>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </ErrorBoundary> 
    </>)
}
export default BeanXPRouter;