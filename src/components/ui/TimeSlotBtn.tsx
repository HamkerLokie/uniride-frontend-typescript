import React from 'react'

interface TimeSlotButtonProps {
  timeSlot: string
  onClick: () => void
}

const TimeSlotBtn: React.FC<TimeSlotButtonProps> = ({ timeSlot, onClick }) => {
  return <button className='py-[.4em] text-center bg-black text-white m-[.1em]  ' onClick={onClick}>{timeSlot}</button>
}

export default TimeSlotBtn
