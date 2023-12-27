import { useState } from 'react'
import { PostFormData } from '../utils/typeDefs'
import { useAppSelector, useDate, useTime, useAppDispatch } from '../hooks'
import { Loader, SubmitBtn } from '../components/ui'
import toast from 'react-hot-toast'

import { postRides } from '../store/slices/ridesSlice'

const PostRide = () => {
  const {
    locations: location,
    loading,
    error
  } = useAppSelector(state => state.locations)
  const dispatch = useAppDispatch()

  const { selectedDate, handleDateChange } = useDate()
  const { time, onTimeChange } = useTime()
  const initialDate = selectedDate || new Date()

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const dayAfterTomorrow = new Date(
    new Date().setDate(new Date().getDate() + 2)
  )

  const [formData, setFormData] = useState<PostFormData>({
    price: '',
    maxPerson: '',
    vehicle: '',
    vehicleNumber: '',
    date: initialDate,
    time: time,
    vehicleType: 'Bike',
    location: location[0].locationName,
    from: '',
    to: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await dispatch(postRides(formData))

    res.payload ? toast.success(res?.payload) : toast.error('Could Not Post')

    setFormData({
      price: '',
      maxPerson: '',
      vehicle: '',
      vehicleNumber: '',
      date: initialDate,
      time: time,
      vehicleType: 'Bike',
      location: location[0].locationName,
      from: '',
      to: ''
    })
  }

  if (error) {
    toast.error('Some Error Occured')
  }

  return (
    <>
      <div className='postride w-full flex flex-col items-center justify-center bg-maincolor z-10 min-h-full px-[1em] py-[2em]'>
        <h1 className='text-[1.3em] font-[700] font-josefins pb-[0.8em]'>
          Post Ride
        </h1>
        {loading && <Loader />}
        <form
          action=''
          className='w-full grid grid-cols-2 place-items-center p-pad'
          onSubmit={e => handleSubmit(e)}
        >
          <select
            name='from'
            id='from'
            value={formData.from}
            className='w-full flex flex-wrap justify-center'
            onChange={e => setFormData({ ...formData, from: e.target.value })}
          >
            <option value='' disabled>
              From
            </option>
            {location?.map(l => {
              return (
                <option key={l._id} value={l.locationName}>
                  {l.locationName}
                </option>
              )
            })}
          </select>

          <select
            name='to'
            id='to'
            value={formData.to}
            onChange={e => setFormData({ ...formData, to: e.target.value })}
          >
            <option value='' disabled>
              To
            </option>

            {location?.map(l => (
              <option key={l._id} value={l.locationName}>
                {l.locationName}
              </option>
            ))}
          </select>

          <input
            max={dayAfterTomorrow.toISOString().split('T')[0]}
            min={tomorrow.toISOString().split('T')[0]}
            type='date'
            id='date-inputs'
            onChange={handleDateChange}
          />

          <input
            type='time'
            placeholder='Time'
            value={formData.time}
            onChange={e => onTimeChange(e)}
          />
          <input
            type='number'
            value={formData.price.toString()}
            onChange={e =>
              setFormData({ ...formData, price: Number(e.target.value) })
            }
            placeholder='Charges'
          />
          <select
            name=''
            id=''
            onChange={e =>
              setFormData({ ...formData, vehicleType: e.target.value })
            }
          >
            <option value='' disabled>
              Vehicle Type
            </option>
            <option value='Bike'>Bike</option>
            <option value='Car'>Car</option>
            <option value='Car'>Scooty</option>
          </select>
          <input
            type='number'
            onChange={e =>
              setFormData({
                ...formData,
                maxPerson: Number(e.target.value)
              })
            }
            value={formData.maxPerson.toString()}
            placeholder='People'
          />
          <input
            type='text'
            onChange={e =>
              setFormData({ ...formData, vehicle: e.target.value })
            }
            value={formData.vehicle.toString()}
            placeholder='Vehicle Name'
          />
          <input
            onChange={e =>
              setFormData({ ...formData, vehicleNumber: e.target.value })
            }
            type='text'
            value={formData.vehicleNumber.toString()}
            placeholder='Vehicle Number'
          />
          <SubmitBtn text='Post Ride' classes='w-full text-white' />
        </form>
      </div>
    </>
  )
}

export default PostRide
