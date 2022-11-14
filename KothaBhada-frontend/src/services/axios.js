import axios from 'axios'

const baseURL = 'http://localhost:8080/api'

const access_token =
  typeof window !== 'undefined' && localStorage.getItem('access_token')

export const axiosInstance = axios.create({
  baseURL: baseURL,
})

// axios.defaults.headers.common['Authorization'] = access_token
//   ? `Bearer ${access_token}`
//   : null

// axios.interceptors.request.use((config) => {
//   if (access_token) {
//     config.headers.common.Authorization = `Bearer ${access_token}`
//   }

//   return config
// })
