import { configureStore } from '@reduxjs/toolkit'
import windowReducer from './windowslice'
import userdataReducer from './userdataslice'
import tbisliceReducer from './tbislice'
import notificationsReducer from './notificationslice'

export default configureStore({
  reducer: {
    windows:windowReducer,
    tbi:tbisliceReducer,
    userdata:userdataReducer,
    notifications:notificationsReducer,
  },
})