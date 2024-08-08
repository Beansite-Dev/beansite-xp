import ReactGA4 from 'react-ga4';
export { Analytics } from "@vercel/analytics/react";
export { SpeedInsights } from "@vercel/speed-insights/react";
import { debug } from '../App';
const InitializeGoogleAnalytics=()=>{
    ReactGA4.initialize('G-4EZVLPZ7RM');
}
const TrackGoogleAnalyticsEvent=(
    category,
    event_name,
    label,
    data
)=>{
    if(debug)console.log("GA event:", category, ":", event_name, ":", label);
    let event_params = {
        category,
        label,
        ...data
    };
    ReactGA4.event(event_name,event_params);
};
export { 
    InitializeGoogleAnalytics,
    TrackGoogleAnalyticsEvent,
};