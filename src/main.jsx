import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./stylesheets/style/default.css";
import BeanXPRouter from './sdk/router.jsx';

ReactDOM.createRoot(document.getElementById('root'))
  .render(<BeanXPRouter><App/></BeanXPRouter>)
