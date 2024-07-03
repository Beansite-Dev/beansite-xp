import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./stylesheets/style/default.css";
import ErrorBoundary from './sdk/modules/ErrorBoundry.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)
