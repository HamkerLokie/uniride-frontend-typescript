import { MouseEvent, useState } from 'react'
import PostRide from '../modals/PostRide'
import { DropDown, Popup, PostRideBtn } from './ui'
import Login from './Login'
const Navbar = () => {
  const role: string = 'user'
  const user: string | null = null

  const [isPostOpen, setPostOpen] = useState<boolean>(false)
  const [isLoginFormOpen, setLoginFormOpen] = useState<boolean>(false)

  const openPostRide = (event: MouseEvent) => {
    event.preventDefault()
    setPostOpen(!isPostOpen)
  }

  const openLogin = (event: MouseEvent) => {
    event.preventDefault()
    setLoginFormOpen(!isLoginFormOpen)
  }

  const handleLogout = () => {
    alert('Logged Out')
  }

  return (
    <>
      <nav className='min-h-fit bg-white flex justify-between items-center px-1 py-3 sticky top-0 z-4'>
        <div className='left'>
          <a href='/' className='w-[60%]'>
            <img className='w-[60%]' src='/icons/logo.png' alt='' />
          </a>
        </div>
        <div className='right w-[19%] flex justify-around'>
          {user ? (
            <>
              {role === 'user' && (
                <>
                  <DropDown
                    user={user}
                    openPostRide={openPostRide}
                    role={role}
                    handleLogout={handleLogout}
                  />
                  <PostRideBtn onClick={openPostRide} />
                </>
              )}
              {role === 'Z<(=XG+P9FD?MV3' && (
                <div className='btn-group'>
                  <button
                    type='button'
                    className='btn btn-danger dropdown-toggle'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    {user}
                  </button>
                  <button className='pos nav-btn'>Post a Ride</button>
                  <div className='dropdown-menu dpm'>
                    <a className='dropdown-item' href='/adminpanel'>
                      All Posted Rides
                    </a>
                    <a className='dropdown-item' href='/adminpanel'>
                      All reports
                    </a>

                    <div className='dropdown-divider'></div>
                    <button onClick={handleLogout} className='dropdown-item'>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <button
                className='nav-btn px-[.2em] py-[.6em] w-1/2 mx-[1%]  bg-maincolor text-white border-none'
                onClick={e => openLogin(e)}
              >
                Login
              </button>
              <PostRideBtn onClick={openPostRide} />
            </>
          )}
        </div>
      </nav>

      {isPostOpen && <Popup Component={<PostRide />}  closePopup={() => setPostOpen(false)} />}
      {isLoginFormOpen && <Popup Component={<Login />}  closePopup={() => setLoginFormOpen(false)}/>}
    </>
  )
}

export default Navbar
