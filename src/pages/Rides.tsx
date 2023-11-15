import Filters from '../components/Filters'
import FiltersCategory from '../components/FiltersCategory'
import ResultCard from '../components/ResultCard'
import { Loader, SubmitBtn } from '../components/ui'
import { Link, useSearchParams } from 'react-router-dom'
import { fetchRides } from '../store/slices/ridesSlice'
import { useAppDispatch, useAppSelector, useDate, useTime } from '../hooks'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { fetchLocation } from '../store/slices/fetchLocations'
import { sampleRides } from '../SampleData/Rides'
import { changeRide } from '../store/slices/setRide'

const Rides = () => {
  const {
    locations: location,
    loading,
    error
  } = useAppSelector(state => state.locations)

  // const { rides } = useAppSelector(state => state.rides)

  const { selectedDate, handleDateChange } = useDate()
  const { time, onTimeChange } = useTime()

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchLocation())
  }, [])

  const [searchParams, setSearchParams] = useSearchParams()

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    const from = searchParams.get('from')
    const to = searchParams.get('to')
    dispatch(fetchRides(`/search/${from}/${to}/${selectedDate}`))
  }

  if (error) {
    toast.error('Some Error Occured.....')
  }
  return (
    <div className='w-full flex flex-col p-input items-center'>
      {loading && <Loader />}

      <div className='border-br shadow-md w-4/5 p-input bg-light'>
        <form onSubmit={e => handleSearch(e)} className='flex gap-2'>
          <select
            className='search-box-shadow w-1/5 rounded-br p-pad outline-none border-none col-span-8'
            name=''
            id='from'
            value={searchParams.get('from')?.toString()}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const newValue = e.target.value
              searchParams.set('from', newValue)
              setSearchParams(searchParams)
            }}
          >
            <option value='' disabled selected>
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
            className='search-box-shadow w-1/5 rounded-br p-pad outline-none border-none'
            name=''
            id='to'
            value={searchParams.get('to')?.toString()}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const newValue = e.target.value
              searchParams.set('to', newValue)
              setSearchParams(searchParams)
            }}
          >
            <option value='' disabled selected>
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
          <input
            className='search-box-shadow bg-black text-white w-1/5 rounded-br p-pad outline-none border-none'
            type='date'
            value={selectedDate?.toISOString().split('T')[0]}
            onChange={e => {
              handleDateChange(e)
            }}
          />
          <input
            className='search-box-shadow bg-black text-white w-1/5 rounded-br p-pad outline-none border-none'
            type='time'
            id='time-inputs'
            value={time}
            onChange={e => onTimeChange(e)}
          />
          <SubmitBtn
            classes='w-[11%] bg-black text-white'
            text='Search Rides'
          />
        </form>
      </div>

      <div className='mt-3 w-4/5 flex gap-5'>
        <div className='filters flex flex-col row-y-[.6em] w-1/5  pr-1'>
          <h3 className='text-center font-[900] text-2xl text-maincolor font-julius '>
            Filters
          </h3>
          <Filters />
        </div>
        <div className='w-4/5 p-pad'>
          <FiltersCategory />
          <div className='p-pad w-full mt-2 overscroll-y-scroll flex flex-col gap-6'>
            {sampleRides.map((ride, index) => (
              <Link
                key={index}
                to={`/ride/details/${ride.vehicleNumber}/${ride.from}/${ride.to}`}
                style={{ all: 'unset' }}
                onClick={() => dispatch(changeRide(ride))}
              >
                <ResultCard ride={ride} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rides
