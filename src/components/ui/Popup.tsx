import React from 'react'

interface PopupProps {
  Component: React.ReactNode
  closePopup: () => void;
}
const Popup: React.FC<PopupProps> = ({ Component, closePopup }) => {
  return (
    <div className='pop-overlay'>
      <div className='popup '>
        {Component}
        <button className='cls-btn absolute -top-5 -right-5 border-none bg-transparent outline-none text-white text-[1em] p-pad z-0' onClick={closePopup}>
          <i className=' bg-maincolor p-input rounded-full fa-solid fa-xmark'></i>
        </button>
      </div>
    </div>
  )
}

export default Popup
