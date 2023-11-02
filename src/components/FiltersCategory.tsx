import React from 'react'

interface FilterButtonsProps {
  handleFilter: (filter: string) => void
}

const filterData = [
  { label: 'All', filter: '/all' },
  { label: 'Most Recent', filter: '/mostrecent' },
  { label: 'Only Car', filter: '/onlycar' },
  { label: 'Only Bike', filter: '/onlybike' },
  { label: 'Less than 2 Person', filter: '/lessthan2' },
  { label: 'Not Finalised', filter: '/notfinalised' }
]

const FiltersCategory: React.FC<FilterButtonsProps> = ({ handleFilter }) => {
  return (
    <div className='w-full border-solid border-2 grid grid-cols-3 place-items-center gap-x-2 min-h-[13vh] p-input rounded-br'>
      {filterData.map((item, index) => (
        <button className='w-3/5 my-1 p-pad font-archivo text-[1.2em] border-solid border-2 hover:bg-crimson hover:text-white' key={index} onClick={() => handleFilter(item.filter)}>
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default FiltersCategory
