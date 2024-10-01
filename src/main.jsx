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
import { PageNotFound } from './sdk/modules/PageNotFound.jsx';
import { Gamemode } from './gamemode/Gamemode.jsx';

InitializeGoogleAnalytics();

ReactDOM.createRoot(document.getElementById('root'))
.render(<BeanXPRouter>
  <Analytics/>
  <SpeedInsights/>
  <BrowserRouter basename='/'>
    <Routes>
      <Route path="" element={<App/>}/>
      <Route path="/render-window" element={<RenderImage/>}/>
      <Route path="*" element={<PageNotFound />}/>
      <Route path="/g" element={<Gamemode/>}/>
      {Object.keys(games).map((gname)=><Route 
        exact path={`/g/host/${games[gname].id}`}
        key={generateId(10)}
        element={<GameHost 
          gdata={games[gname]}
          gname={gname} />}/>)}
    </Routes>
  </BrowserRouter>
</BeanXPRouter>);
