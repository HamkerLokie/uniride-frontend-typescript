import { SubmitBtnProps } from '../../utils/typeDefs'

const SubmitBtn: React.FC<SubmitBtnProps> = ({ text, onClick }) => {
  return (
    <>
      <button />
      <button
        onClick={onClick}
        className='block w-full bg-maincolor p-[.75em] text-center text-black border-none rounded-br font-[600]'
        type='submit'
      >
        {text}
      </button>
    </>
  )
}

export default SubmitBtn
