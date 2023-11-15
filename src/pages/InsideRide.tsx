import React from 'react'
import { Loader } from '../components/ui'
import ResultCard from '../components/ResultCard'
import { useAppSelector } from '../hooks'
import { RideProps } from '../utils/typeDefs'

const InsideRide = () => {
  //   const loading: boolean = false
  const { currentRide, loading } = useAppSelector(state => state.currentRide)

  return (
    <React.Fragment>
      {loading && <Loader />}

      <div className='w-full p-pad flex'>
        <div className='w-3/5 p-input flex flex-col max-h-[90vh] overflow-x-scroll'>
          <div className='details demb'>
            <ResultCard ride={currentRide as RideProps['ride']} />
          </div>
          <br />
          {false ? (
            <>
              <button
                disabled
                className='fix-btn text-center font-julius bg-black text-white p-pad font-[800] rounded-xl'
              >
                This Ride is Fixed
              </button>
              {true && (
                <button
                  // onClick={() => cancelRide(ride._id)}
                  className='text-center font-julius border mt-1 shadow-lg  text-black p-pad font-[800] rounded-xl'
                >
                  Cancel Ride
                </button>
              )}
            </>
          ) : (
            <>
              <button className='fix-btn text-center font-julius bg-black text-white p-pad font-[800] rounded-xl'>
                Fix Ride
              </button>
              <button
                disabled
                className='text-center font-julius border mt-1 shadow-lg  text-black p-pad font-[800] rounded-xl'
              >
                Add Review
              </button>
              <div className='review'></div>
            </>
          )}

          <br />

          <div className='flex flex-col'>
            <h4 className='p-pad border-b-2 font-archivo'>
              More About Maverick
            </h4>

            <div className='mav-details flex flex-col gap-3 text-[.9em] pt-1'>
              <p>
                Profile Status:{' '}
                <span className='flex capitalize font-julius font-[700] text-crimson '>
                  Verified
                </span>
              </p>
              <p>
                Vehicle:{' '}
                <span className='flex capitalize font-julius font-[700] text-crimson '>
                  {'Bike'}
                </span>
              </p>
              <p>
                Profession:{' '}
                <span className='flex capitalize font-julius font-[700] text-crimson '>
                  {'Student'}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className=' w-[30%] p-pad max-h-[88vh] '></div>
      </div>
    </React.Fragment>
  )
}

export default InsideRide
