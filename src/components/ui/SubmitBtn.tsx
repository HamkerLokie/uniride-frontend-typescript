import { SubmitBtnProps } from '../../utils/typeDefs'

const SubmitBtn: React.FC<SubmitBtnProps> = ({ text, classes }) => {
  return (
    <>
      <button
        className={`block w-1/5  p-[.75em] text-center text-black border-none rounded-br shadow-lg font-[600] ${classes} ${classes? 'bg-black' : 'bg-maincolor'}`}
         type='submit'
      >
        {text}
      </button>
    </>
  )
}

export default SubmitBtn
