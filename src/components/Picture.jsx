import React from 'react'


const Picture = () => {

  const storedData = JSON.parse(localStorage.getItem("cvData"));
  const imgSrc = storedData?.picture || "https://shorturl.at/ozBG0";

  return (
    <div className='w-1/2 '>
      <img src={imgSrc} alt='Profile' className=' rounded-full' />
    </div>
  )
}

export default Picture;