import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./stylesheets/style/default.css";
import ErrorBoundary from './sdk/modules/ErrorHandler.jsx';
import LoadingScreen from './sdk/modules/LoadingScreen.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <LoadingScreen />
    <App />
  </ErrorBoundary>
)
