import React from 'react';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Picture from '../components/Picture';
import Languages from '../components/Languages';
import Name from '../components/Name';
import Experience from '../components/Experience';
import Education from '../components/Education';
import About from '../components/About';

const CV = () => {
  return (
    <div className='flex flex-row h-screen bg-gray-200'>
        <div className='w-1/3 bg-gray-300'>
        <Picture/>
        <Contact/>
        <Skills/>
        <Languages/>
      </div>
        <div className='w-2/3 bg-white'>
        <Name/>
        <About/>
        <Experience/>
        <Education/>
      </div>
    </div>
  );
};

export default CV;
