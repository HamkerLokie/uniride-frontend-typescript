const Navbar = () => {
  const role: string = 'user'
  const user: string | null = 'Lokendra'
  return (
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
                    <a className='dropdown-item' href='/myrides'>
                      My Rides
                    </a>
                    <a className='dropdown-item' href='/allchats'>
                      My Chats
                    </a>

                    <div className='dropdown-divider'></div>

                    <button
                      // onClick={handleLogout}
                      className='dropdown-item'
                    >
                      Logout
                    </button>
                  </div>
                </div>
                <button className='nav-btn px-[.2em] py-[.6em] w-1/2 mx-[1%]  bg-black text-white border-none'>
                  Post a Ride
                </button>
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
                <button className='pos nav-btn'>
                  Post a Ride
                </button>
                <div className='dropdown-menu dpm'>
                  <a className='dropdown-item' href='/adminpanel'>
                    All Posted Rides
                  </a>
                  <a className='dropdown-item' href='/adminpanel'>
                    All reports
                  </a>

                  <div className='dropdown-divider'></div>
                  <button
                    // onClick={handleLogout}
                    className='dropdown-item'
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </nav>
  )
}

export default Navbar
