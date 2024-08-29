import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./stylesheets/style/default.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RenderImage from './misc/renderImages.jsx';
import { 
  InitializeGoogleAnalytics, 
  TrackGoogleAnalyticsEvent,
  BeanXPRouter
} from './sdk/sdk.jsx';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

InitializeGoogleAnalytics();

ReactDOM.createRoot(document.getElementById('root'))
.render(<BeanXPRouter>
  <Analytics/>
  <SpeedInsights/>
  <BrowserRouter basename='/'>
    <Routes>
      <Route path="" element={<App/>}/>
      <Route path="/render-window" element={<RenderImage/>}/>
      {/* <Route path="/firebean-gui" element={<FireBean/>}/>*/}{/*Why does this exist?*/}
      {/* <Route path="/privacy-policy" /> */}
      {/* <Route path="/terms" /> */}
    </Routes>
  </BrowserRouter>
</BeanXPRouter>);
