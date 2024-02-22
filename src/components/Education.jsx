import React from 'react'

const Education = () => {

  const storedData = JSON.parse(localStorage.getItem('cvData'));
  const education = storedData?.education || {
    degree1: "BTECH in Computer Science and Engineering",
    institute1: "ABC University, XYZ City, 12345",
    duration1: "2018-2022",
    summary1: "I have completed my BTECH in Computer Science and Engineering from ABC University, XYZ City, 12345. I have scored 8.5 CGPA.",
    degree2: "Intermediate",
    institute2: "ABC School, XYZ City, 12345",
    duration2: "2016-2018",
    summary2: "I have completed my Intermediate from ABC School, XYZ City, 12345. I have scored 95%.",
  };

  return (

    <div className='mt-2 p-3'>
      <h1 className='text-3xl font-bold underline '>Education</h1>
      <div className=' p-3'>
        <h3 className='text-xl font-semibold '>{education.degree1}</h3>
        <div className='flex gap-4'>
        <h5 className='text-md italic font-semibold '>{education.institute1}</h5>
        <p className='text-md italic'>{education.duration1}</p>
        </div>
        <p className='text-md tracking-widest'>{education.summary1}</p>
      </div>
      <div className=' p-3'>
        <h3 className='text-xl font-semibold '>{education.degree2}</h3>
        <div className='flex gap-4'>
        <h5 className='text-md italic font-semibold '>{education.institute2}</h5>
        <p className='text-md italic'>{education.duration2}</p>
        </div>
        <p className='text-md tracking-widest'>{education.summary2}</p>
      </div>
    </div>
  )
}

export default Education