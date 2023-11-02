import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios'

interface LocationState {
  locations: any[]
  loading: boolean
  error: string | null
}

const initialState: LocationState = {
  locations: [],
  loading: false,
  error: null
}

export const fetchLocationSlice = createSlice({
  name: 'fetch_location',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchLocation.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        ;(state.loading = false), (state.locations = action.payload)
        state.error = null
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
          ? action.payload.toString()
          : 'An error occurred'
      })
  }
})

export const fetchLocation = createAsyncThunk(
  'location_slice/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/get-location')
      const locations = response.data?.locations || []
      
      return locations
    } catch (error) {
      console.log(error)
      return rejectWithValue('Failed to fetch locations')
    }
  }
)

export const {} = fetchLocationSlice.actions
export default fetchLocationSlice.reducer
