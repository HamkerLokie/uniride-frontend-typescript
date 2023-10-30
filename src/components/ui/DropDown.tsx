import React, {MouseEvent} from 'react'

interface DropdownProps {
  user: string
  openPostRide: (event: MouseEvent) => void
  role: string
  handleLogout: (event: MouseEvent) => void
}

const DropDown: React.FC<DropdownProps> = ({
  user,
  openPostRide,
  role,
  handleLogout
}) => {
  return (
    <div className='btn-group w-full flex justify-between'>
      <button
        type='button'
        className='btn bg-danger w-full text-white dropdown-toggle'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        {user}
      </button>
      <div className='dropdown-menu w-full dpm'>
        {role === 'user' && (
          <>
            <a className='dropdown-item' href='/myrides'>
              My Rides
            </a>
            <a className='dropdown-item' href='/allchats'>
              My Chats
            </a>
          </>
        )}
        <div className='dropdown-divider'></div>
        <button className='dropdown-item' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default DropDown
