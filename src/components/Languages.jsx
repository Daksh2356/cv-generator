import React from 'react'

const Languages = () => {
    const storedData = JSON.parse(localStorage.getItem("cvData"));
    const languages = storedData?.languages || {
      language1: "English",
      language2: "Hindi",
      language3: "French",
      proficiency1: "90",
      proficiency2: "89",
      proficiency3: "75",
    };

    return (
        <div className='mt-2 p-3 text-start'>
          <h1 className='text-3xl font-roboto tracking-tight hover:underline '>Languages</h1>
            <pre className='text-xl font-roboto tracking-widest'> 
            
            {languages.language1}  {languages.proficiency1 ? languages.proficiency1 + "%" : ""} 
            </pre>

            <pre className='text-xl font-roboto tracking-widest'>
            {languages.language2}  {languages.proficiency2 ? languages.proficiency2 + "%" : ""}
            </pre>

            <pre className='text-xl font-roboto tracking-widest'>
            {languages.language3}  {languages.proficiency3 ? languages.proficiency3 + "%" : ""}
            </pre>
            

        </div>
    )
}

export default Languages