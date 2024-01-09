import { configureStore } from '@reduxjs/toolkit'
import mapSlice from './slices/mapSlice'
import navslice from './slices/navslice'
export const store = configureStore({
  reducer: {
    data: mapSlice,
    authBol: navslice
  },
})