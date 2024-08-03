import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./stylesheets/style/default.css";
import BeanXPRouter from './sdk/router.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RenderImage from './misc/renderImages.jsx';
import FireBean from './firebean/firebean.jsx';
import * as Sentry from "@sentry/react";

// sentry stuff
Sentry.init({
  dsn: "https://d3d308c77b68a5b4df4a426854e52312@o4507710868684800.ingest.us.sentry.io/4507710903025664",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.browserProfilingIntegration(),
    Sentry.replayIntegration(),
    //? i need to implement a custom gui, so for now, this is not gonna run
    // Sentry.feedbackIntegration({
      // colorScheme: "system",
      // isNameRequired: true,
    // }),
  ],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById('root'))
.render(<BeanXPRouter>
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
