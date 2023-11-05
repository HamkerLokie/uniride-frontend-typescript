import { useEffect, useState } from 'react'
import { aboutContent, developers, queries } from '../utils/homeContent'
import { Loader } from '../components/ui'
import { useAppDispatch, useAppSelector,useDate, useTime } from '../hooks'
import { fetchLocation } from '../store/slices/fetchLocations'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const { selectedDate, handleDateChange } = useDate()
  const { time, onTimeChange } = useTime()
  // const [person, setPerson] = useState<number>()
  const [searchParams, setSearchParams] = useSearchParams()

  const {
    locations: location,
    loading,
    error
  } = useAppSelector(state => state.locations)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchLocation())
  }, [])

  function renderSocialLinks (socialLinks: string) {
    const socialPlatforms = [
      { platform: 'facebook', icon: 'fa fa-facebook-f' },
      { platform: 'instagram', icon: 'fa fa-instagram' },
      { platform: 'twitter', icon: 'fa fa-twitter' },
      { platform: 'dribbble', icon: 'fa fa-dribbble' }
    ]

    return socialPlatforms.map(platformData => {
      const link = socialLinks[platformData.platform]

      return (
        <li className='list-none' key={platformData.platform}>
          <a
            className='relative block w-50 h-50 line-height-50 text-center bg-white text-23 text-gray-700 font-bold mx-6 transition-transform transform translate-y-200 opacity-0'
            href={link}
          >
            <i className={platformData.icon}></i>
          </a>
        </li>
      )
    })
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const fromVal = searchParams.get('from')
    const toVal = searchParams.get('to')
    const person = searchParams.get('person')

    if ([fromVal, toVal, time, person].some(value => value == null)) {
      toast.error(`Select All the fields`)
      return
    }

    const queryString = `from=${fromVal}&to=${toVal}&time=${time}&person=${person}`

    navigate(`/rides?${queryString}`)
  }

  if (loading) {
    return <Loader />
  }
  if (error) {
    toast.error('Some Error Occured')
  }

  return (
    <div className='w-full flex flex-col items-center'>
      <section id='landing' className='p-pad flex mt-3 justify-center w-4/5'>
        <div className='flex flex-col'>
          <h2 className='font-josefin font-[800] text-4/5xl'>
            CHOOSE YOUR GO-TO-UNIVERSITY PARTNER
          </h2>
          <form
            onSubmit={handleSearch}
            action=''
            className='flex flex-col items-start'
          >
            <select
              name='from'
              id='from'
              className=' home-select outline-yellow-500  border-solid p-input w-3/5 border-maincolor'
              value={searchParams.get('from') || ''}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                const newValue = e.target.value
                searchParams.set('from', newValue)
                setSearchParams(searchParams)
              }}
            >
              <option value='' disabled selected>
                From
              </option>
              {location &&
                location.map(l => {
                  return (
                    <option key={l._id} value={l.locationName}>
                      {l.locationName}
                    </option>
                  )
                })}
            </select>
            <select
              name='to'
              id='to'
              className=' home-select outline-yellow-500  border-solid p-input w-3/5 border-maincolor'
              value={searchParams.get('to') || ''}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                const newValue = e.target.value
                searchParams.set('to', newValue)
                setSearchParams(searchParams)
              }}
            >
              <option value='' disabled selected>
                To
              </option>

              {location &&
                location.map(l => (
                  <option key={l._id} value={l.locationName}>
                    {l.locationName}
                  </option>
                ))}
            </select>

            <div className='date-time sub  flex justify-center items-center '>
              <input
                type='date'
                id='date-inputs'
                value={selectedDate?.toISOString().split('T')[0]}
                onChange={e => {
                  handleDateChange(e)
                }}
                min={new Date().toISOString().split('T')[0]}
                className='p-input font-archivo text-center text-white bg-[#D34848] mr-5 w-60'
              />

              <input
                type='time'
                id='time-inputs'
                className='p-input font-archivo text-center text-white bg-[#D34848] mr-5 w-40'
                placeholder='Time'
                value={time}
                onChange={e => onTimeChange(e)}
              />
            </div>
            <div className='flex justify-center items-center '>
              <select
                name=''
                id=''
                className=' person w-60 p-input bg-[#D34848] outline-none border-solid text-white border-maincolor  '
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const newValue = e.target.value
                  searchParams.set('person', newValue)
                  setSearchParams(searchParams)
                }}
              >
                <option value='' disabled selected>
                  Persons
                </option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
              </select>
              <input
                type='submit'
                className='ml-5 font-archivo text-center text-white bg-[#D34848]  w-40 p-input'
                value='Search'
              />
            </div>
          </form>
        </div>
        <div className='w-full'>
          <div className='imgs relative z-[-1]'>
            <img className='ico building' src='/images/building.png' alt='' />
            <img className='ico bike absolute' src='/images/bike.png' alt='' />
            <img className='ico road absolute' src='/images/road.png' alt='' />
            <img className='ico tree absolute' src='/images/tree.png' alt='' />
          </div>
        </div>
      </section>
      <section
        id='about  '
        className='flex mt-6 flex-col w-full justify-center items-center space-20'
      >
        <div className='top flex w-4/5 min-h-fit'>
          {aboutContent.map(about => (
            <div
              className='ab-card flex flex-col space-2 justify-center items-center p-input text-center'
              key={about.id}
            >
              <div className='img w-3/6'>
                <img className='money w-full' src={about.img} alt='' />
              </div>
              <p className='font-[600] text-2xl'>{about.title}</p>
              <p className='desc font-archivo text-base font-[100] text-center'>
                {about.description}
              </p>
            </div>
          ))}
        </div>
        <div className='flex flex-col w-full bg-maincolor min-h-fit justify-between items-center  p-cont text-white'>
          <h4 className='text-2xl'>
            Stress Among Students due to exhaustion from transport
          </h4>
          <p className='font-archivo text-center w-4/5 text-lg mt-3'>
            Say goodbye to student exhaustion caused by transportation woes!
            UniRide's innovative platform offers a stress-free commuting
            experience, connecting students with fellow travelers, reducing
            costs, and providing eco-friendly options. Embrace convenience, save
            time, and prioritize your well-being with UniRide.
          </p>
          <a className='bg-crimson p-input rounded-br mt-3' href='/'>
            LEARN MORE.....
          </a>
        </div>
      </section>

      <section className='queries flex flex-col items-center w-full px-10 mt-[2em]'>
        <h4 className='w-4/5 text-center text-4/5xl border-b-2 border-maincolor border-solid mb-[.9em]'>
          QUERIES
        </h4>
        <div className='qu p-pad w-[80%] grid grid-cols-2 gap-10 mb-[10%]'>
          {queries.map(query => (
            <div className='flex flex-col pl-[1em] gap-2 items-start border-l-4 border-solid border-golden'>
              <p className='font-[900]'>{query.question}</p>
              <div>{query.answer}</div>
            </div>
          ))}
        </div>
      </section>

      <section className='developers'>
        <h4>Developers</h4>
        <div className='max-w-full flex justify-evenly my-0 mx- auto'>
          {developers.map(dev => (
            <div className='card-wrapper w-[400px] h-[500px] relative'>
              <div className=' devcard absolute top-1/2 left-1/2 w-[300px] h-[400px] translate-x-[-50%] translate-y-[-50%] overflow-hidden  cursor-pointer ease-in duration-[.5s]'>
                <div className='card-image absolute top-0 left-0 w-[92%] h-[92%] z-3 bg-black ease-in duration-[.5s]'>
                  <img
                    className='hover:opacity-[0.4] duration-[.5s] w-full h-full object-contain'
                    src={dev.profileImage}
                    alt='profile one'
                  />
                </div>

                <ul className='social-icons absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-3 flex'>
                  {renderSocialLinks(dev.socialLinks)}
                </ul>

                <div className='details absolute bottom-0 left-0 bg-main-color w-full h-120 z-0 p-10'>
                  <h2 className='my-30 px-0 font-archivo text-center'>
                    {dev.name}
                    <br />
                    <span className='job-title text-base font-josefin leading-10 text-white font-light'>
                      {dev.jobTitle}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
