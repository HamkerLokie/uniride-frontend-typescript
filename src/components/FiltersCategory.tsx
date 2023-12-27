import React from 'react'
import { useAppDispatch } from '../hooks'
import { filterRides } from '../store/slices/ridesSlice'

const filterData = [
  { label: 'All', filter: '/all' },
  { label: 'Most Recent', filter: '/mostrecent' },
  { label: 'Only Car', filter: '/onlycar' },
  { label: 'Only Bike', filter: '/onlybike' },
  { label: 'Less than 2 Person', filter: '/lessthan2' },
  { label: 'Not Finalised', filter: '/notfinalised' }
]

const FiltersCategory: React.FC = () => {
  const dispatch = useAppDispatch()
  return (
    <div className='w-full border-solid border-2 grid grid-cols-6 place-items-center min-h-[10vh]  rounded-br shadow-xl'>
      {filterData.map((item, index) => (
        <button
          className='w-11/12 my-1 p-pad font-archivo  border-solid text-sm border-2 hover:bg-crimson hover:text-white '
          key={index}
          onClick={() => dispatch(filterRides(`${item.label}`))}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default FiltersCategory
