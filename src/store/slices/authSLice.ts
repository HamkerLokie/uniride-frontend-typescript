import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from '../../axios'
interface AuthState {
  user: string | null
  token: string | null
  isLoggedIn: boolean
  loading: boolean
  role: string
  error: string | undefined
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('access_token') || null,
  isLoggedIn: false,
  loading: false,
  role: 'user',
  error: undefined
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.token = null
      state.isLoggedIn = false
      state.user = null
      state.error = undefined
    }
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false
        state.error = undefined
        state.token = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(validate.pending, state => {
        state.loading = true
      })
      .addCase(
        validate.fulfilled,
        (state, action: PayloadAction<{ username: string; role: string }>) => {
          state.loading = false
          state.error = undefined
          state.user = action.payload.username
          state.role = action.payload.role
        }
      )
      .addCase(validate.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const login = createAsyncThunk(
  'auth_slice/login',
  async (
    formdata: { email: String; password: String },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post('/login', {
        email: formdata.email,
        password: formdata.password
      })
      const token = response?.data?.access_token
      localStorage.setItem('access_token', token)
      console.log('res', response)
      return token
    } catch (error: any) {
      console.log(error)
      return rejectWithValue(error.message)
    }
  }
)

export const validate = createAsyncThunk<
  { username: string; role: string },
  string
>('auth_slice/validate', async (url, { rejectWithValue }) => {
  try {
    console.log('url', url)
    const response = await axios.get(url)
    const username = response?.data?.username
    const role = response?.data?.role
    return { username, role }
  } catch (error: any) {
    console.log('valfailed', error)
    return rejectWithValue(error.message)
  }
})

export const { logout } = authSlice.actions

export default authSlice.reducer
