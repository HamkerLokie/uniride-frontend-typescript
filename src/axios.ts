import axios, { AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000'
  // baseURL: 'https://good-jade-betta-ring.cyclic.app',
})

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token')
  if (token) {
    ;(config as AxiosRequestConfig).headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`
    }
  }
  return config
})

export default instance
