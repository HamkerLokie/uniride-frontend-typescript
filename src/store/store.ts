import { configureStore } from '@reduxjs/toolkit'
import authSLice from './slices/authSLice'
export const store = configureStore({
  reducer: {
    auth: authSLice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
