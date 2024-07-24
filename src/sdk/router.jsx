import ErrorBoundary from './modules/ErrorHandler.jsx';
import LoadingScreen from './modules/LoadingScreen.jsx';
import store from './store/store.jsx';
import { Provider } from 'react-redux';
import ShutdownScreen from './modules/shutdownScreen.jsx';

const BeanXPRouter=(props)=>{
    return(<>
        <ErrorBoundary>
            <Provider store={store}>
                <LoadingScreen />
                <ShutdownScreen />
                {props.children}
            </Provider>
        </ErrorBoundary> 
    </>)
}
export default BeanXPRouter;