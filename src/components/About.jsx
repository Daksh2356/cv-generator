import React from 'react'

const About = () => {
  
    const storedData = JSON.parse(localStorage.getItem('cvData'));
    const about = storedData?.aboutme || '';


  return (
    <div className='mt-1 p-3'>
      <h1 className='text-3xl font-bold underline '>About me</h1>
      <p className='text-sm'>{about}</p>
    </div>
  )
}

export default About