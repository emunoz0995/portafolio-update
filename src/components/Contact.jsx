import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4'>
      <div className='mt-[-150px] md:w-full md:pl-[80px]'>
        <p className='text-4xl font-bold inline border-b-4 border-amber-600 text-gray-300'>Contact</p>
        <p className='text-gray-300 py-4'>Submit the form below or shoot me an email </p>
      </div>
      <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] p-auto h-[50%]'>
        <div className=' flex flex-col bg-[#977d7d33] p-5 w-[500px] md:shadow-md md:shadow-[#ebedf0] md:h-[450px] rounded-md'>
          <input className='bg-[#ccd6f665] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f665]' type="email" placeholder='Email' name='email' />
          <textarea className='bg-[#ccd6f665] p-2' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:bg-amber-600 hover:border-amber-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </div>
      </form >

    </div >
  )
}

export default Contact