import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from '../../axios'
interface AuthState {
  user: null | { username: string; role: string }
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
  }
})

export const login = createAsyncThunk<
  string,
  { email: string; password: string }
>('auth_slice/login', async (userdata, { rejectWithValue }) => {
  try {
    const email = userdata?.email
    const password = userdata?.password
    const response = await axios.post('/login', { email, password })
    const token = response?.data?.access_token
    localStorage.setItem('access_token', token)
    return token
  } catch (error: any) {
    return rejectWithValue(error.message)
  }
})

export const validate = createAsyncThunk<
  { username: string; role: string },
  string
>('auth_slice/validate', async (url, { rejectWithValue }) => {
  try {
    const response = await axios.post(url)
    const username = response?.data?.username
    const role = response?.data?.role
    return { username, role }
  } catch (error: any) {
    return rejectWithValue(error.message)
  }
})

export const { logout } = authSlice.actions

export default authSlice.reducer
