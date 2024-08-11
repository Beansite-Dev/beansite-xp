import ReactGA4 from 'react-ga4';
import { debug } from '../../App';
const InitializeGoogleAnalytics=()=>{
    ReactGA4.initialize('G-4EZVLPZ7RM');
}
const TrackGoogleAnalyticsEvent=(
    category,
    event_name,
    label,
    data
)=>{
    try{
        if(debug)console.log("GA event:", category, ":", event_name, ":", label);
        let event_params = {
            category,
            label,
            ...data
        };
        ReactGA4.event(event_name,event_params);
    }catch(err){/* console.log(err); */}
};
export { 
    InitializeGoogleAnalytics,
    TrackGoogleAnalyticsEvent,
};