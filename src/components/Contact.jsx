import React from 'react'

const Contact = () => {

    const storedData = JSON.parse(localStorage.getItem("cvData"));
    const contact = storedData?.contact || {
      email: "",
      phone: "",
      address: "",
    };

    return (
        <div className='mt-2 p-3'>
          <h1 className='text-3xl '>Contact</h1>
            <p className='text-sm'>Email: {contact.email}</p>
            <p className='text-sm'>Phone: {contact.phone}</p>
            <p className='text-sm'>Address: {contact.address}</p>
        </div>
    )
}

export default Contact