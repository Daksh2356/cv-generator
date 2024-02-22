import React from 'react'

const Education = () => {

  const storedData = JSON.parse(localStorage.getItem('cvData'));
  const education = storedData?.education || {
    companyName1: "",
    degree1: "",
    institute1: "",
    duration1: "",
    summary1: "",
    degree2: "",
    institute2: "",
    duration2: "",
    summary2: "",
  };

  return (

    <div className='mt-2 p-3'>
      <h1 className='text-3xl font-bold underline '>Education</h1>
      <div className=' p-3'>
        <h3 className='text-md font-semibold '>{education.degree1}</h3>
        <h5 className='text-xl font-semibold '>{education.institute1}</h5>
        <p className='text-sm italic'>{education.duration1}</p>
        <p className='text-sm'>{education.summary1}</p>
      </div>
      <div className=' p-3'>
        <h3 className='text-md font-semibold '>{education.degree2}</h3>
        <h5 className='text-xl font-semibold '>{education.institute2}</h5>
        <p className='text-sm italic'>{education.duration2}</p>
        <p className='text-sm'>{education.summary2}</p>
      </div>
    </div>
  )
}

export default Education