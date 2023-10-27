import { useState, useRef } from 'react'
import { aboutContent } from '../utils/aboutContent'

type locationObject = {
  _id: string
  locationName: string
}

const Home = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const [time, setTime] = useState<string | number>()
  const selectedTime = useRef<string>()

  const location: locationObject[] = [
    { _id: '1', locationName: 'Darpan' },
    { _id: '2', locationName: 'CU Gate 2' }
  ]

  const onTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = event.target.value
    const list = newTime.split(':').join('')
    selectedTime.current = list
    setTime(newTime)
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(event.target.value))
  }
  return (
    <div className='w-full flex flex-col items-center'>
      <section id='landing' className='p-pad flex mt-5 justify-center w-4/5'>
        <div className='flex flex-col'>
          <h2 className='font-josefin font-[800] text-4/5xl'>
            CHOOSE YOUR GO-TO-UNIVERSITY PARTNER
          </h2>
          <form action='' className='flex flex-col items-start'>
            <select
              name='from'
              id='from'
              className=' home-select outline-yellow-500  border-solid p-input w-3/5 border-maincolor'
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
                onChange={e => handleDateChange(e)}
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

      <section className='queries'>
        <h4>QUERIES</h4>
        <div className='qu'>
          <div className='q-box'>
            <p>
              What if my commute schedule changes? Can I edit or cancel a ride
              post?{' '}
            </p>
            <div>
              Of course! UniRide understands that plans can change. You can
              easily edit or cancel your ride post through the app, ensuring
              flexibility and convenience.{' '}
            </div>
          </div>
          <div className='q-box'>
            <p>
              Can I choose between carpooling and biking as my preferred
              commuting options?{' '}
            </p>
            <div>
              Absolutely! UniRide offers both carpooling and biking options,
              empowering you to select the mode of transportation that suits
              your preferences and schedule.{' '}
            </div>
          </div>
          <div className='q-box'>
            <p>
              Are there any safety measures in place when connecting with other
              users for rides?{' '}
            </p>
            <div>
              Safety is our top priority. UniRide provides an interactive chat
              feature, enabling users to communicate and build trust before
              sharing rides. Additionally, we encourage users to review and rate
              their co-commuters.{' '}
            </div>
          </div>
          <div className='q-box'>
            <p>Can I apply filters to find rides that match my preferences? </p>
            <div>
              Yes, you can! UniRide offers a range of filters, allowing you to
              search for rides based on transportation type (car or bike),
              number of people sharing the ride, and more.{' '}
            </div>
          </div>
          <div className='q-box'>
            <p>How can I report any issues or concerns while using UniRide? </p>
            <div>
              If you encounter any problems or have concerns, you can mail us at{' '}
              <span>help@uniride.live</span> and we will assist you promptly.{' '}
            </div>
          </div>
          <div className='q-box'>
            <p>
              Does UniRide have a user dashboard to keep track of my rides and
              activities?{' '}
            </p>
            <div>
              The UniRide user dashboard provides an overview of all your posted
              rides, rides taken, and communication history, ensuring you stay
              organized and in control of your commuting activities.{' '}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
