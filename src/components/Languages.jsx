import React from 'react'

const Languages = () => {
    const storedData = JSON.parse(localStorage.getItem("cvData"));
    const languages = storedData?.languages || {
      language1: "",
      language2: "",
      language3: "",
      proficiency1: "",
      proficiency2: "",
      proficiency3: "",
    };

    return (
        <div className='mt-2 p-3'>
          <h1 className='text-3xl '>Languages</h1>
            <pre className='text-sm'> 
            
            {languages.language1}  {languages.proficiency1}
            </pre>

            <pre className='text-sm'>
            {languages.language2}  {languages.proficiency2}
            </pre>

            <pre className='text-sm'>
            {languages.language3}  {languages.proficiency3}
            </pre>
            

        </div>
    )
}

export default Languages