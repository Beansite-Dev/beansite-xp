import { configureStore } from '@reduxjs/toolkit'
import windowReducer from './windowslice'
import userdataReducer from './userdataslice'
import tbisliceReducer from './tbislice'

export default configureStore({
  reducer: {
    windows:windowReducer,
    tbi:tbisliceReducer,
    userdata:userdataReducer,
  },
})