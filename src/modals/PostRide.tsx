import { useState } from 'react'
import { PostFormData, locationObject } from '../utils/typeDefs'

const PostRide = () => {
  const location: locationObject[] = [
    { _id: '1', locationName: 'Darpan' },
    { _id: '2', locationName: 'CU Gate 2' }
  ]

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const dayAfterTomorrow = new Date(
    new Date().setDate(new Date().getDate() + 2)
  )

  const [formData, setFormData] = useState<PostFormData>({
    price:0,
    maxPerson: 1,
    vehicle: '',
    vehicleNumber: '',
    date: new Date(),
    time: '',
    vehicleType: 'Bike',
    location: location[0].locationName
  })

  const loading = false
  return (
    <>
      <div className='postride w-full flex flex-col items-center justify-center bg-maincolor z-10 min-h-full px-[1em] py-[2em]'>
        <h1 className='text-[1.3em] font-[700] font-josefins pb-[0.8em]'>
          Post Ride
        </h1>
        {loading && <div>Loadingg...</div>}
        <form
          action=''
          className='w-full grid grid-cols-2 place-items-center p-pad'
        >
          <select
            name='from'
            id='from'
            className='w-full flex flex-wrap justify-center'
          >
            <option value='' disabled>
              From
            </option>
            {location &&
              location.map(l => {
                return (
                  <option key={l._id} value={l.locationName}>
                    {l.locationName}
                  </option>
                )
              })}
          </select>

          <select name='to' id='to'>
            <option value='' disabled>
              To
            </option>

            {location &&
              location.map(l => (
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
            // onChange={handleDateChange}
          />

          <input
            type='time'
            placeholder='Time'
            value={formData.time.toString()}
            // onChange={t => onTimeChange(t.target.value)}
          />
          <input
            type='number'
            value={formData.price.toString()}
            // onChange={e => setprice(e.target.value)}
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
                maxPerson: parseInt(e.target.value, 10)
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
          <input
            // onClick={postRide}
            className='bg-black text-white'
            type='submit'
            value='Post Ride'
          />
        </form>
      </div>
    </>
  )
}

export default PostRide
