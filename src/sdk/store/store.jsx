import { configureStore } from '@reduxjs/toolkit'
import windowReducer from './windowslice'
import userdataReducer from './userdataslice'

export default configureStore({
  reducer: {
    windows:windowReducer,
    userdata:userdataReducer,
  },
})