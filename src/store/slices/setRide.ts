import { createSlice } from '@reduxjs/toolkit'

interface CurrentRide {
  currentRide: Record<string, any>
  loading: boolean
  error: string | null
}
const storedRide = sessionStorage.getItem('current_ride')
const parsedRide = storedRide ? JSON.parse(storedRide) : null
const initialState: CurrentRide = {
  currentRide: parsedRide || {},
  loading: false,
  error: null
}
const setRide = createSlice({
  name: 'current_ride',
  initialState,
  reducers: {
    changeRide: (state, action) => {
      const ride = action.payload
      state.loading = true
      state.currentRide = ride
      sessionStorage.setItem('current_ride', JSON.stringify(ride))
      state.loading = false
    }
  }
})

export const { changeRide } = setRide.actions
export default setRide.reducer
