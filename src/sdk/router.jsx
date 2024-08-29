import ErrorBoundary from './modules/ErrorHandler.jsx';
import LoadingScreen from './modules/LoadingScreen.jsx';
import store from './store/store.jsx';
import { Provider } from 'react-redux';
import ShutdownScreen from './modules/shutdownScreen.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const BeanXPRouter=(props)=>{
    return(<>
        <HelmetProvider>
            <ErrorBoundary>
                <Provider store={store}>
                    <LoadingScreen />
                    <ShutdownScreen />
                    {props.children}
                </Provider>
            </ErrorBoundary> 
        </HelmetProvider>
    </>)
}
export default BeanXPRouter;