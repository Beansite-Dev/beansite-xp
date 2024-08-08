import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./stylesheets/style/default.css";
import BeanXPRouter from './sdk/router.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RenderImage from './misc/renderImages.jsx';
import FireBean from './firebean/firebean.jsx';
import { 
  InitializeGoogleAnalytics, 
  TrackGoogleAnalyticsEvent, 
  Analytics, 
  SpeedInsights 
} from './analytics/anayltics.jsx';
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
</BeanXPRouter>)
