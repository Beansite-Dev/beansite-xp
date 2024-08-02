import { configureStore } from '@reduxjs/toolkit';
import windowReducer from './windowslice';
import userdataReducer from './userdataslice';
import tbisliceReducer from './tbislice';
import notificationsReducer from './notificationslice';
import settingsReducer from './settingsslice';
import cmdccReducer from './cmdccslice';
// import contextMenuReducer from './contextmenuslice';
export default configureStore({
  reducer: {
    windows:windowReducer,
    tbi:tbisliceReducer,
    userdata:userdataReducer,
    notifications:notificationsReducer,
    settings:settingsReducer,
    cmd_custom_commands:cmdccReducer,
    // context_menu:contextMenuReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false,}),
});