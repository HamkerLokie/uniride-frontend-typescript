import axios from '../../axios'
// import toast from 'react-hot-toast'

export const fetchLocations = async () => {
  try {
    const response = await axios.get('/get-location')
    const location = response.data?.locations
    return location
  } catch (error) {
    console.log(error)
  }
}
