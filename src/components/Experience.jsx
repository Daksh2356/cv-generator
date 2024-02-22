import React from 'react'

const Experience = () => {

    const storedData = JSON.parse(localStorage.getItem('cvData'));
    const experience = storedData?.experience || {
      companyName1: "ABC Company",
      position1: "Software Developer",
      duration1: "2019-2021",
      description1: "Developed and maintained the company's website and web applications.",
      companyName2: "XYZ Company",
      position2: "Front-end Developer",
      duration2: "2017-2019",
      description2: "Worked on the company's website and web applications.",
      companyName3: "PQR Company",
      position3: "Intern",
      duration3: "2016-2017",
      description3: "Worked as an intern and learned about web development.",
    };


  return (
      <div className='mt-2 p-3'>
        <h1 className='text-3xl font-bold underline '>Experience</h1>
        <div className='p-3'>
          <h3 className='text-xl font-semibold '>{experience.position1}</h3>
         <div className='flex gap-4'>
          <h5 className='text-md font-semibold italic'>{experience.companyName1}</h5>
          <p className='text-md italic'>{experience.duration1}</p>
         </div>
          <p className='text-md tracking-widest'>{experience.description1}</p>
        </div>
        <div className=' p-3'>
          <h3 className='text-xl font-semibold '>{experience.position2}</h3>
          <div className='flex gap-4'>
          <h5 className='text-md font-semibold italic'>{experience.companyName2}</h5>
          <p className='text-md italic'>{experience.duration2}</p>
         </div>
          <p className='text-md tracking-widest'>{experience.description2}</p>
        </div>
        <div className=' p-3'>
          <h3 className='text-xl font-semibold '>{experience.position3}</h3>
          <div className='flex gap-4'>
          <h5 className='text-md font-semibold italic'>{experience.companyName3}</h5>
          <p className='text-md italic'>{experience.duration3}</p>
         </div>
          <p className='text-md tracking-widest'>{experience.description3}</p>
        </div>
      </div>
  )
}

export default Experience