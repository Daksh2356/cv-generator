import React from 'react'


const Picture = () => {

  const storedData = JSON.parse(localStorage.getItem("cvData"));
  const imgSrc = storedData?.picture || "https://shorturl.at/ozBG0";

  return (
    <div className='mt-5 flex justify-center items-center w-full '>
      <img src={imgSrc} alt='Profile' className='rounded-full w-52 h-52 object-cover ' />
    </div>
  )
}

export default Picture;