import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'

interface RideState {
  rides: any[]
  loading: boolean
  error: string | null,
  post:string
}

const initialState: RideState = {
  rides: [],
  loading: false,
  error: null,
  post:''
}

const rideSlice = createSlice({
  name: 'rides',
  initialState,
  reducers: {
    filterRides: (state = initialState, action) => {
      const vehicleType = action.payload
      switch (vehicleType) {
        case 'Only Car':
          state.rides = state.rides.filter(ride => ride.vehicleType === 'Car')
          break

        case 'Only Bike':
          state.rides = state.rides.filter(ride => ride.vehicleType === 'Bike')
          break

        case 'Less than 2 Person':
          state.rides = state.rides.filter(ride => ride.maxPerson < 2)
          break

        case 'Not Finalised':
          state.rides = state.rides.filter(ride => !ride.isFinalised)
          break

        default:
          state.rides = state.rides
          break
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRides.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchRides.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.rides = action.payload
      })
      .addCase(fetchRides.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
          ? action.payload.toString()
          : 'An error occurred'
      })
      .addCase(postRides.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(postRides.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.post = action.payload
      })
      .addCase(postRides.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
          ? action.payload.toString()
          : 'An error occurred'
      })
  }
})

export const fetchRides = createAsyncThunk(
  'rides/search',
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(url)
      const result = response.data || []
      return result
    } catch (error) {
      return rejectWithValue('Failed to fetch locations')
    }
  }
)

export const postRides = createAsyncThunk(
  'rides/post',
  async (formData : object, { rejectWithValue }) => {
    try {
      const response = await axios.post('/post-ride', formData)
      const result = response.data?.message || []
      return result
    } catch (error) {
      return rejectWithValue('Failed to Post locations')
    }
  }
)

export const { filterRides } = rideSlice.actions
export default rideSlice.reducer
