import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import authSLice from './slices/authSLice'
import fetchSlice from './slices/fetchLocations'
import rideSlice from './slices/ridesSlice'
import setRide from './slices/setRide'
export const store = configureStore({
  reducer: {
    auth: authSLice,
    locations: fetchSlice,
    rides: rideSlice,
    currentRide : setRide
  }
})  

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
