
import React, { useContext, useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Mode } from '../context/mode';
import Switch from './Switch';


const SideMenu = () => {

    const [flg, setFlg] = useState(true)
    const { mode } = useContext(Mode)
    console.log(mode)

    const toggleSlide = () => (flg) ? setFlg(false) : setFlg(true)


    return (
        <>

            <div onClick={toggleSlide} className='lg:hidden font-thin text-4xl' >
                <IoReorderThreeOutline />
            </div>




            <div className={`fixed bottom-0 left-0 w-screen h-screen p-2 bg-opacity-40 bg-black flex flex-col ${(flg) ? 'translate-x-full' : 'translate-x-0'} z-10 transition-all duration-500`}>


                <nav className={`flex top-0 left-0 w-full h-screen  gap-4 flex-col ${mode === 'light' ? 'bg-white' : 'bg-black'} p-4 text-3xl transition-colors rounded-md`}>

                    <div className='flex items-center'>
                        <Switch />

                        <div onClick={toggleSlide} className='p-3 cursor-pointer text-2xl ml-auto'>
                            <IoClose />
                        </div>
                    </div>

                    <div className='flex items-center justify-center flex-col h-full gap-6'>
                        <h5 className="my-font text-5xl w-full text-center py-1">Home</h5> <hr />
                        <h5 className="my-font text-5xl w-full text-center py-1">Client</h5> <hr />
                        <h5 className="my-font text-5xl w-full text-center py-1">Community</h5> <hr />
                        <h5 className="my-font text-5xl w-full text-center py-1">Contect Us</h5> <hr />


                        <div className='flex text-2xl justify-center py-10 gap-5'>
                            <FaFacebookF />
                            <FaInstagram />
                            <FaLinkedinIn />
                        </div>
                    </div>
                </nav>



            </div>

        </>
    )
}

export default SideMenu
