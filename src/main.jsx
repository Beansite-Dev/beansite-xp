import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./stylesheets/style/default.css";
import BeanXPRouter from './sdk/router.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RenderImage from './misc/renderImages.jsx';
import FireBean from './firebean/firebean.jsx';
import ReactGA from 'react-ga4';
import { Analytics } from "@vercel/analytics/react";

ReactGA.initialize('G-4EZVLPZ7RM');
ReactDOM.createRoot(document.getElementById('root'))
.render(<BeanXPRouter>
  <Analytics/>
  <BrowserRouter basename='/'>
    <Routes>
      <Route path="" element={<App/>}/>
      <Route path="/render-window" element={<RenderImage/>}/>
      {/* <Route path="/firebean-gui" element={<FireBean/>}/>*/}{/*Why does this exist?*/}
      {/* <Route path="/privacy-policy" /> */}
      {/* <Route path="/terms" /> */}
    </Routes>
  </BrowserRouter>
</BeanXPRouter>)
