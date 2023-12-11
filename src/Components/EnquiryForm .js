import React, { useContext, useState } from 'react'
import { Mode } from '../context/mode'

const EnquiryForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [city, setcity] = useState('')
    const [number, setnumber] = useState('')
    const [Purpose, setPurpose] = useState('')
    const [message, setmessage] = useState('')

    const { mode } = useContext(Mode)



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
        <div className={`items-center w-full lg:w-[95%] pb-12 mx-auto grid lg:grid-cols-2 p-4 gap-10  border-2 rounded-lg shadow-form ${mode === 'dark' ? "shadow-gray-500 border-white" : "shadow-black border-black"}`}>
            <div className='w-full flex flex-col items-center'>
                <h3 className={`my-font text-[15vw] md:text-4xl font-bold ${mode === "light" ? 'text-black' : 'text-gray-200'}  uppercase `}>register</h3>
                <p>WE'LL BE YOUR SPARRING PARTNER.</p>

            </div>
            <form
                onSubmit={handleSubmit}
                className=' gap-4 grid grid-cols-2 content-stretch w-full lg:min-w-[26rem] max-w-[26rem] m-auto  '>

                <input
                    className={`text-sm p-4 ${mode !== "dark" ? 'shadow-black border-black' : 'shadow-gray-500 border-white bg-gray-400 placeholder:text-black'} shadow-form border-2 border-black rounded-lg placeholder:text-lg outline-none`}
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Name' required />

                <input
                    className={`text-sm p-4 ${mode !== "dark" ? 'shadow-black border-black' : 'shadow-gray-500 border-white bg-gray-400 placeholder:text-black'} shadow-form border-2 border-black rounded-lg placeholder:text-lg outline-none`}
                    type='number'
                    value={number}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='number' required />


                <input
                    className={`text-sm col-span-2 p-4 ${mode !== "dark" ? 'shadow-black border-black' : 'shadow-gray-500 border-white bg-gray-400 placeholder:text-black'} shadow-form border-2 border-black rounded-lg placeholder:text-lg outline-none`}
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='E-mail' required />

                <input
                    className={`text-sm col-span-2 p-4 ${mode !== "dark" ? 'shadow-black border-black' : 'shadow-gray-500 border-white bg-gray-400 placeholder:text-black'} shadow-form border-2 border-black rounded-lg placeholder:text-lg outline-none`}
                    type='text'
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                    placeholder='city' required />

                <input
                    className={`text-sm col-span-2 p-4 ${mode !== "dark" ? 'shadow-black border-black' : 'shadow-gray-500 border-white bg-gray-400 placeholder:text-black'} shadow-form border-2 border-black rounded-lg placeholder:text-lg outline-none`}
                    type='text'
                    value={Purpose}
                    onChange={(e) => setcity(e.target.value)}
                    placeholder='Purpose ' required />

                <textarea
                    className={`text-sm col-span-2 p-4 ${mode !== "dark" ? 'shadow-black border-black' : 'shadow-gray-500 border-white bg-gray-400 placeholder:text-black'} shadow-form border-2 border-black rounded-lg placeholder:text-lg outline-none`}
                    type='text'
                    value={message}
                    onChange={(e) => setcity(e.target.value)}
                    placeholder='message  ' required />


                <button className={`${mode === "light" ? 'bg-black text-gray-50' : 'bg-gray-100 text-black'} uppercase py-[1rem] tracking-[.2rem] font-bold text-[.75rem] rounded-full`} type='submit'>submit</button>

            </form>
        </div>
    )
}

export default EnquiryForm 
