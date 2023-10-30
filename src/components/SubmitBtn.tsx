import { SubmitBtnProps } from '../utils/typeDefs'
const SubmitBtn: React.FC<SubmitBtnProps> = ({ text }) => {
  return (
    <>
      <input
        // onClick={postRide}
        className='bg-black text-white'
        type='submit'
        value={text}
      />
    </>
  )
}

export default SubmitBtn
