import React from "react";

const Name = () => {

    const storedData = JSON.parse(localStorage.getItem('cvData'));
    const fullName = storedData?.fullname || '';
    const designation = storedData?.designation || '';

  return <div className="mt-1 p-3">
        <h1 className='text-3xl font-bold '>{fullName}</h1>
        <pre>_______________________________</pre>
        <h2 className='text-xl font-semibold '>{designation}</h2>
  </div>;
};

export default Name;
