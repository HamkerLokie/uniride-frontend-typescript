import { ChargesInput, TimeSlotBtn, RatingStar } from './ui'
import { useState } from 'react'
const timeSlots = [
  '09 AM - 10 AM',
  '10 AM - 11 AM',
  '11 AM - 12 PM',
  '12 PM - 01 PM',
  '01 PM - 02 PM',
  '02 PM - 03 PM',
  '03 PM - 04 PM',
  '04 PM - 05 PM',
  '05 PM - 06 PM',
  '06 PM - 07 PM'
]
const Filters = () => {
  const handleSearch = (time: string) => {
    console.log(`Searching for ${time}`)
  }

  const [maxCharges, setMaxCharges] = useState(0)
  const [minCharges, setMinCharges] = useState(0)
  const [userRating, setUserRating] = useState<number>(0)

  const handleRatingChange = (rating: number) => {
    setUserRating(rating)
  }

  const handleMaxChargesChange = (value: number) => {
    setMaxCharges(value)
  }

  const handleMinChargesChange = (value: number) => {
    setMinCharges(value)
  }

  const suggestedCharges = 40
  return (
    <>
      <div className='timeslots flex flex-col w-full mb-2'>
        <h4 className='text-center font-[400] text-lg p-pad bg-golden font-josefin search-box-shadow'>
          Time Slots
        </h4>
        <div className='t-btn flex flex-col justify-center '>
          {timeSlots.map((timeSlot, index) => (
            <TimeSlotBtn
              key={index}
              timeSlot={timeSlot}
              onClick={() => handleSearch(timeSlot)}
            />
          ))}
        </div>
      </div>

      <div className='charges flex flex-col justify-between mb-2'>
        <h4 className='text-center font-[400] text-lg p-pad bg-golden font-josefin search-box-shadow'>
          Charges
        </h4>
        <form action='' className='flex w-full'>
          <ChargesInput
            placeholder='min'
            label='Min'
            value={minCharges}
            onChange={handleMinChargesChange}
          />
          <ChargesInput
            placeholder='max'
            label='Max'
            value={maxCharges}
            onChange={handleMaxChargesChange}
          />
        </form>
        <h6 className='font-archivo'>Suggested: $ {suggestedCharges}</h6>
      </div>

      <div >
        <h1 className='text-center font-[400] text-lg p-pad bg-golden font-josefin search-box-shadow'>Your Star Rating: {userRating}</h1>
        <RatingStar totalStars={5} onRatingChange={handleRatingChange} />
      </div>
    </>
  )
}

export default Filters
