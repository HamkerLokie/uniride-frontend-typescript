import { Dna } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className='loader'>
      <div className='pop-overlay'></div>
      <Dna
        height='100'
        width='100'
        // type='TailSpin'
        // secondaryColor='#FBCBDC'
        // radius='12.5'
        ariaLabel='mutating-dots-loading'
        wrapperStyle={{}}
        wrapperClass='mutating-dots-loading'
        visible={true}
      />
    </div>
  )
}

export default Loader
