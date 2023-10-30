import { MouseEvent } from 'react'
interface BtnProps {
  onClick: (event: MouseEvent) => void
}

const PostRideBtn: React.FC<BtnProps> = ({ onClick }) => {
  return (
    <button
      className='nav-btn px-[.2em] py-[.6em] w-1/2 mx-[1%]  bg-black text-white border-none'
      onClick={onClick}
    >
      Post a Ride
    </button>
  )
}

export default PostRideBtn
