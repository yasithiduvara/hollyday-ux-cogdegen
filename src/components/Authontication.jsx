import React from 'react'

const Authontication = () => {
  return (
    <div>
        {isPopupOpen && (
        <div
          className="fixed inset-0 bg-[black] bg-opacity-50 flex justify-center items-center "
          onClick={togglePopup}
        >
          <h1>ushuifh hkkki</h1>
        </div>
      )}
    </div>
  )
}

export default Authontication;