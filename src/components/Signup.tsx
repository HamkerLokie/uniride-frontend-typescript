import { useState, MouseEvent } from 'react'
import { UserRegisterData } from '../utils/typeDefs'
import { Loader, SubmitBtn } from './ui'

const Signup = () => {
  const loading: boolean = false
  const [formData, setFormData] = useState<UserRegisterData>({
    email: '',
    username: '',
    mobile: 91000000,
    password: '',
    repeat_password: ''
  })

  const handleSignUp = (e: MouseEvent) => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <>
      {loading && <Loader />}
      <div className=' form-reg bg-[rgba(17,24,39,1)] text-white px-[3em] py-5'>
        <p className='text-center font-josefin text-white text-[1.5rem] font-[700] leading-8'>
          Register
        </p>
        <form className='form flex flex-col '>
          <div className='input-group'>
            <label htmlFor='username'>Name:</label>
            <input
              type='text'
              value={formData.username}
              name='username'
              id='username'
              onChange={e =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div className='input-group'>
            <label htmlFor='username'>E-mail</label>
            <input
              type='email'
              value={formData.email}
              name='username'
              id='username'
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className='input-group'>
            <label htmlFor='username'>Mobile:</label>
            <input
              type='text'
              placeholder='+91 XXXXX XXXXX'
              value={formData.mobile.toString()}
              name='username'
              id='username'
              onChange={e =>
                setFormData({ ...formData, mobile: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={formData.password}
              id='password'
              placeholder=''
              onChange={e =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className='input-group mb-2'>
            <label htmlFor='password'>Confirm Password</label>
            <input
              type='password'
              name='password'
              value={formData.repeat_password}
              id='password'
              placeholder=''
              onChange={e =>
                setFormData({ ...formData, repeat_password: e.target.value })
              }
            />
          </div>

          <SubmitBtn text='Sign Up' onClick={handleSignUp} />
        </form>
      </div>
    </>
  )
}

export default Signup
