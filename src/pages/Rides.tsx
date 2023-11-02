import Filters from '../components/Filters'
import FiltersCategory from '../components/FiltersCategory'
import ResultCard from '../components/ResultCard'
import { Loader, SubmitBtn } from '../components/ui'
import { Outlet, useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/sliceHooks'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
const Rides = () => {
  const {
    locations: location,
    loading,
    error
  } = useAppSelector(state => state.locations)

  //   const dispatch = useAppDispatch()
  //   useEffect(() => {
  //     dispatch(fetchLocation())
  //   }, [])

  const [searchParams, setSearchParams] = useSearchParams()

  const handleSearch = () => {}

  const handleFilter = (filter: string) => {
    console.log('Filtering by', filter)
  }

  if (error) {
    toast.error('Some Error Occured.....')
  }
  return (
    <div className='w-full flex flex-col p-input items-center'>
      {loading && <Loader />}

      <div className='border-br w-4/5 p-input bg-light'>
        <form action='POST' onSubmit={handleSearch} className='flex gap-2'>
          <select
            className='search-box-shadow w-1/5 rounded-br p-pad outline-none border-none col-span-8'
            name=''
            id='from'
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
          />
          <input
            className='search-box-shadow bg-black text-white w-1/5 rounded-br p-pad outline-none border-none'
            type='time'
            name=''
            id=''
          />
          <SubmitBtn
            classes='w-[15%] bg-black text-white'
            text='Search Rides'
          />
        </form>
      </div>

      <div className='mt-3 w-4/5 flex gap-5'>
        <div className='filters flex flex-col row-y-[.6em] w-1/5 max-h-[70vh] overflow-y-scroll pr-1'>
          <h3 className='text-center font-[900] text-2xl text-maincolor font-julius '>
            Filters
          </h3>
          <Filters />
        </div>
        <div className='w-4/5 p-pad'>
          <FiltersCategory handleFilter={handleFilter} />
          <div className='p-pad w-full h-[70vh] overscroll-y-scroll flex flex-col gap-6'>
            <ResultCard />
            <ResultCard />
            <ResultCard />
            <ResultCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rides
