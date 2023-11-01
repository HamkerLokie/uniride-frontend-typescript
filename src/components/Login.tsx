import { Loader, Popup, SubmitBtn } from './ui'
import { LoginFormData } from '../utils/typeDefs'
import { useState, MouseEvent } from 'react'
import Signup from './Signup'
const Login = () => {
  const loading: boolean = false
  const [iseRegiterFormOpen, setRegisterFormOpen] = useState<boolean>(false)

  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  })

  const handleLogin = (event: MouseEvent) => {
    event.preventDefault()

    
  }

  return (
    <>
      {loading && <Loader />}
      <div className='w-full bg-[rgba(17,24,39,1)] px-[5em] py-[2rem] text-white'>
        <p className='text-center font-josefin text-white text-[1.5rem] font-[700] leading-8'>
          LOGIN
        </p>
        <form className='form flex flex-col mt-2'>
          <div className='input-group'>
            <label htmlFor='username'>E-mail</label>
            <input
              type='text'
              value={formData.email.toString()}
              name='username'
              id='username'
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={formData.password.toString()}
              id='password'
              placeholder=''
              onChange={e =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <div className='forgot'>
              <a rel='noopener noreferrer' href='#'>
                Forgot Password ?
              </a>
            </div>
          </div>
          <SubmitBtn text='Log In' onClick={handleLogin} />
        </form>

        <p className='signup text-center  mt-4'>
          Don't have an account?{' '}
          <button
            onClick={() => setRegisterFormOpen(!iseRegiterFormOpen)}
            className='hover:underline'
          >
            Sign up
          </button>
        </p>
      </div>
      {iseRegiterFormOpen && <Popup Component={<Signup />} closePopup={() => setRegisterFormOpen(false)} />}
    </>
  )
}

export default Login
