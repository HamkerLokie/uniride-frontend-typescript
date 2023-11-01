import { MouseEvent, useEffect, useState } from 'react'
import PostRide from '../modals/PostRide'
import { DropDown, Popup, PostRideBtn } from './ui'
import Login from './Login'
import { validate } from '../store/slices/authSLice'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { user, role } = useSelector((state: RootState) => state.auth)

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

  useEffect(() => {
    dispatch(validate('/validate'))
  }, [])

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
              {role === 'User' && (
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

      {isPostOpen && (
        <Popup Component={<PostRide />} closePopup={() => setPostOpen(false)} />
      )}
      {isLoginFormOpen && (
        <Popup
          Component={<Login />}
          closePopup={() => setLoginFormOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar
