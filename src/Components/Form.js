import { useContext, useState } from 'react'
import { Mode } from '../context/mode'

const SignupForm = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [school, setschool] = useState('')
    const [age, setAge] = useState()

    const {mode} = useContext(Mode)


    const handleSubmit = async (e) => {
        e.preventDefault();


        setUsername('')
        setEmail('')
        setschool('')
        setAge('')
    };

    return (
        <div className={`flex flex-col items-center w-full rounded-lg  py-6 md:px-4 gap-10`}>
            <h3 className={`text-[15vw] md:text-4xl font-bold ${mode === 'dark'?'text-gray-100':'text-gray-900'} capitalize `}>register</h3>

            <form
                onSubmit={handleSubmit}
                className=' gap-4 grid grid-cols-2 content-stretch w-full lg:min-w-[26rem] max-w-[26rem] '>

                <input
                    className={`text-sm p-4 ${mode !== "dark"?'bg-transparent':'bg-gray-400 placeholder:text-black'} outline outline-2 rounded-sm outline-gray-300 `}
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Name' required />

                <input
                    className={`text-sm p-4 ${mode !== "dark"?'bg-transparent':'bg-gray-400 placeholder:text-black'} outline outline-2 rounded-sm outline-gray-300`}
                    type='number'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder='Age' required />


                <input
                    className={`text-sm p-4 ${mode !== "dark"?'bg-transparent':'bg-gray-400 placeholder:text-black'} outline outline-2 rounded-sm outline-gray-300 col-span-2`}
                    type='school'
                    value={school}
                    onChange={(e) => setschool(e.target.value)}
                    placeholder='school' required />


                <input
                    className={`text-sm p-4 ${mode !== "dark"?'bg-transparent':'bg-gray-400 placeholder:text-black'} outline outline-2 rounded-sm outline-gray-300 col-span-2`}
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='E-mail' required />

                <button className={`${mode==="dark"?'bg-gray-100 text-gray-800':'bg-black text-gray-50 '} uppercase py-[1rem] tracking-[.2rem] font-semibold text-[.75rem] rounded-full`} type='submit'>submit</button>

            </form>
        </div>
    )
}

export default SignupForm