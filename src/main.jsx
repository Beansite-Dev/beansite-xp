import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./stylesheets/style/default.css";
import ErrorBoundary from './sdk/modules/ErrorHandler.jsx';
import LoadingScreen from './sdk/modules/LoadingScreen.jsx';
import store from './sdk/store/store.jsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <Provider store={store}>
      <LoadingScreen />
      <App />
    </Provider>
  </ErrorBoundary>
)
