import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import { RideProps } from '../utils/typeDefs'

const ResultCard: React.FC<RideProps> = ({ ride }) => {
  return (
    <>
      <div className='flex flex-col hover:scale-[1.01] hover:shadow-xl hover:transition-all  z-3'>
        <div className='bg-maincolor p-[.6em] rounded-tl-br rounded-tr-br text-white flex justify-between items-center'>
          <p className='font-josefin font-[400]'>
            Ride on: <span className='text-black '>{ride.from}</span> <br />{' '}
            Ride at <span className='text-black '>{ride.time}</span>
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
              <p>{ride.driver.username}</p>
              <p className='w-[100%] text-maincolor'>
                {ride.vehicleType} : {ride.vehicle}
              </p>
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
              <span className='d'>{ride.from}</span>
            </p>
            <p className=' flex font-josefins font-[400]inline-block  justify-between  '>
              To <span className='d'>{ride.to}</span>{' '}
            </p>
            <span style={{ fontSize: '.7em', fontWeight: '600', color: 'red' }}>
              {ride.isFinalised ? (
                <> Ride is Finalised </>
              ) : (
                <>Not Finalised Yet</>
              )}
            </span>
            <span className='font-josefin font-[600] text-gray-400'>
              Exp time - 10 mins
            </span>
          </div>
        </div>

        <div className='flex bg-white font-archivo justify-between p-pad rounded-bl-br rounded-br-br search-box-shadow'>
          <div className='price font-julius font-[800] text-crimson'>
            {ride.price}
          </div>
          <div className=''>
            <button className='font-josefin'>
              Vehicle Number :{' '}
              <span className='text-crimson'>{ride.vehicleNumber} </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultCard
