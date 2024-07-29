import { configureStore } from '@reduxjs/toolkit';
import windowReducer from './windowslice';
import userdataReducer from './userdataslice';
import tbisliceReducer from './tbislice';
import notificationsReducer from './notificationslice';
import settingsReducer from './settingsslice';

export default configureStore({
  reducer: {
    windows:windowReducer,
    tbi:tbisliceReducer,
    userdata:userdataReducer,
    notifications:notificationsReducer,
    settings:settingsReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false,}),
});