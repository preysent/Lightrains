
import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";




const SideMenu = () => {

    const [flg, setFlg]= useState(true)

    const toggleSlide = ()=> (flg)?setFlg(false):setFlg(true)

    return (
        <>

            <div onClick={toggleSlide} className='lg:hidden font-thin text-4xl' >
            <IoReorderThreeOutline/>
            </div>
            



            <div className={`fixed bottom-0 left-0 w-screen h-screen p-2 bg-opacity-40 bg-black flex flex-col ${ (flg)?'hidden':''} z-10 transition-all`}>

                    
                <nav className="flex top-0 left-0 w-full h-screen  gap-4 flex-col bg-white p-4 text-3xl rounded-md">
                    
                    <div onClick={toggleSlide} className='p-3 cursor-pointer bg-white text-2xl ml-auto'>
                        <IoClose/>
                    </div>
                   
                    <a href="#" className="text-5xl w-full text-center py-4">Home</a>
                    <a href="#" className="text-5xl w-full text-center py-4">Client</a>
                    <a href="#" className="text-5xl w-full text-center py-4">Community</a>
                    <a href="#" className="text-5xl w-full text-center py-4">Contect Us</a>

                    <div className='flex text-2xl justify-center py-10 gap-5'>
                        <FaFacebookF /> 
                        <FaInstagram />
                        <FaLinkedinIn/>
                    </div>
                </nav>
               


            </div>

        </>
    )
}

export default SideMenu
