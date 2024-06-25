import { configureStore } from '@reduxjs/toolkit'
import windowReducer from './windowslice'

export default configureStore({
  reducer: {
    windows:windowReducer,
  },
})