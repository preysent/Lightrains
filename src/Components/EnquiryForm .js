import React, { useState } from 'react'

const EnquiryForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [city, setcity] = useState('')
    const [number, setnumber] = useState('')
    const [Purpose, setPurpose] = useState('')
    const [message, setmessage] = useState('')



    const handleSubmit = async (e) => {
        e.preventDefault();


        setUsername('')
        setEmail('')
        setcity('')
        setnumber('')
        setPurpose('')
        setmessage('')
    };

    return (
        <div className={`items-center w-full rounded-lg grid grid-cols-2  px-4 gap-10`}>
            <div>
                <h3 className='my-font text-3xl md:text-4xl font-bold text-black  uppercase '>register</h3>
                <p>WE'LL BE YOUR SPARRING PARTNER.</p>

            </div>
            <form
                onSubmit={handleSubmit}
                className=' gap-4 grid grid-cols-2 content-stretch w-full lg:min-w-[26rem] max-w-[26rem]'>

                <input
                    className='text-sm p-4 bg-transparent outline outline-2 rounded-sm outline-gray-300 '
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Name' required />

                <input
                    className='text-sm p-4 bg-transparent outline outline-2 rounded-sm outline-gray-300'
                    type='number'
                    value={number}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='number' required />


                <input
                    className='text-sm p-4 bg-transparent outline outline-2 rounded-sm outline-gray-300 col-span-2'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='E-mail' required />

                <input
                    className='text-sm p-4 bg-transparent outline outline-2 rounded-sm outline-gray-300 col-span-2'
                    type='text'
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                    placeholder='city' required />

                <input
                    className='text-sm p-4 bg-transparent outline outline-2 rounded-sm outline-gray-300 col-span-2'
                    type='text'
                    value={Purpose}
                    onChange={(e) => setcity(e.target.value)}
                    placeholder='Purpose ' required />

                <textarea
                    className='text-sm p-4 bg-transparent outline outline-2 rounded-sm outline-gray-300 col-span-2'
                    type='text'
                    value={message}
                    onChange={(e) => setcity(e.target.value)}
                    placeholder='message  ' required />


                <button className='bg-black text-gray-50 uppercase py-[1rem] tracking-[.2rem] font-bold text-[.75rem] rounded-full' type='submit'>submit</button>

            </form>
        </div>
    )
}

export default EnquiryForm 
