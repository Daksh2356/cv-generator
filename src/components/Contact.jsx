import React from 'react'

const Contact = () => {

    const storedData = JSON.parse(localStorage.getItem("cvData"));
    const contact = storedData?.contact || {
      email: "johndoe@gmail.com",
      phone: "1234567899",
      address: "ABC Street, XYZ City, 12345",
    };

    return (
        <div className='mt-2 p-3 text-center'>
          <h1 className='text-4xl font-roboto tracking-tight hover:underline'>Contact</h1>
            <p className='text-xl font-roboto tracking-widest'>{contact.email}</p>
            <p className='text-xl font-roboto tracking-widest'>{contact.phone}</p>
            <p className='text-xl font-roboto tracking-widest'>{contact.address}</p>
          
        </div>
    )
}

export default Contact