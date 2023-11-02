import { SubmitBtnProps } from '../../utils/typeDefs'

const SubmitBtn: React.FC<SubmitBtnProps> = ({ text, classes }) => {
  return (
    <>
      <button
        className={`block w-full  p-[.75em] text-center text-black border-none rounded-br font-[600]'
        type='submit ${classes} ${classes? 'bg-black' : 'bg-maincolor'}`}
      >
        {text}
      </button>
    </>
  )
}

export default SubmitBtn
