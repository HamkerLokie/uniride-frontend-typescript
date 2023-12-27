import React from 'react'
import SubmitBtn from './ui/SubmitBtn'

const ChatBox = () => {
  return (
    <React.Fragment>
      <div className='w-full shadow-xl '>
        <div className='bg-maincolor text-white p-pad text-center font-josefin rounded-tr-md rounded-tl-md'>
          UserName
        </div>
        <div className='flex flex-col p-input flex-grow-1 min-h-[70vh] overflow-y-scroll bg-white'>
          <div>
            <p className={true ? 'message own fade' : 'message fade'}>
              <div className='flex'>
                <img
                  className='w-[32px] h-[32px] rounded-r-full object-cover'
                  alt='user-image'
                  src='/icons/img.png'
                />
                <p className='p-input rounded-xl bg-maincolor text-white max-w-[300px]'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Alias, officiis?
                </p>
              </div>
              <div className='text-sm font-josefin'>1 min</div>
            </p>
          </div>
          <div>
            <p className={false ? 'message own fade' : 'message fade'}>
              <div className='flex'>
                <img
                  className='w-[32px] h-[32px] rounded-r-full object-cover'
                  alt='user-image'
                  src='/icons/img.png'
                />
                <p className='p-input rounded-xl  max-w-[300px]'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Alias, officiis?
                </p>
              </div>
              <div className='text-sm'>1 min</div>
            </p>
          </div>
        </div>
        <div className='flex items-center w-full shadow-xl p-input'>
          <form
            action=''
            className='flex items-center w-full px-1 justify-between '
          >
            <input type='text' className='p-pad outline-none shadow-lg w-full' placeholder='Send Message..' />
            <SubmitBtn text="->" classes='text-white p-1'/>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ChatBox
