import React from 'react'

const Experience = () => {

    const storedData = JSON.parse(localStorage.getItem('cvData'));
    const experience = storedData?.experience || {
      companyName1: "",
      position1: "",
      duration1: "",
      description1: "",
      companyName2: "",
      position2: "",
      duration2: "",
      description2: "",
      companyName3: "",
      position3: "",
      duration3: "",
      description3: "",
    };


  return (
      <div className='mt-2 p-3'>
        <h1 className='text-3xl font-bold underline '>Experience</h1>
        <div className=' p-3'>
          <h3 className='text-md font-semibold '>{experience.position1}</h3>
          <h5 className='text-xl font-semibold '>{experience.companyName1}</h5>
          <p className='text-sm italic'>{experience.duration1}</p>
          <p className='text-sm'>{experience.description1}</p>
        </div>
        <div className=' p-3'>
          <h3 className='text-md font-semibold '>{experience.position2}</h3>
          <h5 className='text-xl font-semibold '>{experience.companyName2}</h5>
          <p className='text-sm italic'>{experience.duration2}</p>
          <p className='text-sm'>{experience.description2}</p>
        </div>
        <div className=' p-3'>
          <h3 className='text-md font-semibold '>{experience.position3}</h3>
          <h5 className='text-xl font-semibold '>{experience.companyName3}</h5>
          <p className='text-sm italic'>{experience.duration3}</p>
          <p className='text-sm'>{experience.description3}</p>
        </div>
      </div>
  )
}

export default Experience