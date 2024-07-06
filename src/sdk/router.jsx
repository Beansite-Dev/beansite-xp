import ErrorBoundary from './modules/ErrorHandler.jsx';
import LoadingScreen from './modules/LoadingScreen.jsx';
import store from './store/store.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const BeanXPRouter=(props)=>{
    return(<>
        <ErrorBoundary>
            <Provider store={store}>
                <LoadingScreen />
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