import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const ResultCard = () => {
  return (
    <>
      <div className='flex flex-col hover:scale-[1.01] hover:shadow-xl hover:transition-all  z-3'>
        <div className='bg-maincolor p-[.6em] rounded-tl-br rounded-tr-br text-white flex justify-between items-center'>
          <p className='font-josefin font-[400]'>
            Ride on: <span className='text-black '>12/12/2023</span> <br /> Ride
            at <span className='text-black '>18:06 PM</span>
          </p>
          <p className='font-josefin'>
            Posted: 52 minutes ago{' '}
            <FontAwesomeIcon icon={faClock} color='white' />
            
          </p>
        </div>

        <div className='flex justify-between items-center p-input border-b-2 search-box-shadow bg-white'>
          <div className=' flex gap-6'>
            <div className='img flex justify-center items-center'>
              <img src='/icons/img.png' alt='' />
            </div>
            <div className='dri-det flex flex-col font-[800]'>
              <p>Lokendra</p>
              <p className='w-[100%] text-maincolor'>Car : Verna</p>
              <p>
                <i
                  className='fa-solid fa-star'
                  style={{ color: '#FFCD60' }}
                ></i>
                <i
                  className='fa-solid fa-star'
                  style={{ color: '#FFCD60' }}
                ></i>
                <i
                  className='fa-solid fa-star'
                  style={{ color: '#FFCD60' }}
                ></i>
                <i className='fa-solid fa-star'></i>
              </p>
            </div>
          </div>
          <div className='  w-1/5 flex flex-col justify-around text-end relative'>
            <p className=' flex font-josefins font-[400]inline-block  justify-between  '>
              From 
              <span className='d'>Kharar</span>
            </p>
            <p className=' flex font-josefins font-[400]inline-block  justify-between  '>
              To  <span className='d'>CU Gate 2</span>{' '}
            </p>
            <span style={{ fontSize: '.7em', fontWeight: '600', color: 'red' }}>
              {true ? <> Ride is Finalised </> : <>Not Finalised Yet</>}
            </span>
            <span className='font-josefin font-[600] text-gray-400'>
              Exp time - 10 mins
            </span>
          </div>
        </div>

        <div className='flex bg-white font-archivo justify-between p-pad rounded-bl-br rounded-br-br search-box-shadow'>
          <div className='price font-julius font-[800] text-crimson'>Rs. 200</div>
          <div className=''>
            <button className='font-josefin'>
              Vehicle Number : <span className='text-crimson'>MP20 CF 9363 </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultCard
