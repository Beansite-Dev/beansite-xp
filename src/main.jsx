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
import games from './beanpowered/assets/games.js';
import { GameHost } from './sdk/modules/GameHost.jsx';
import { generateId } from './sdk/sdk.jsx';

InitializeGoogleAnalytics();

ReactDOM.createRoot(document.getElementById('root'))
.render(<BeanXPRouter>
  <Analytics/>
  <SpeedInsights/>
  <BrowserRouter basename='/'>
    <Routes>
      <Route path="" element={<App/>}/>
      <Route path="/render-window" element={<RenderImage/>}/>
      {Object.keys(games).map((gname)=><Route 
        exact path={`/g/${games[gname].id}`}
        key={generateId(10)}
        element={<GameHost gdata={games[gname]} />} />)}
    </Routes>
  </BrowserRouter>
</BeanXPRouter>);
