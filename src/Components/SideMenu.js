
import React, { useContext, useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Mode } from '../context/mode';
import { gsap } from 'gsap';


const SideMenu = () => {

    const [flg, setFlg] = useState(true)
    const { mode, toggleMode } = useContext(Mode)
    console.log(mode)

    const toggleSlide = () => (flg) ? setFlg(false) : setFlg(true)

    const toggleSec = () => {
        toggleMode()
        const btn = document.querySelector(".sec-btn")

        gsap.to(btn, {
            scale: 800,
            opacity: 0,
            duration: .5,
        })

        setTimeout(() => {
            gsap.timeline()
                .to(btn, {
                    scale: 1,
                    duration: .01,
                })
                .to(btn, {
                    opacity: 1
                })
        }, 500)
    }

    return (
        <>

            <div onClick={toggleSlide} className='lg:hidden font-thin text-4xl' >
                <IoReorderThreeOutline />
            </div>




            <div className={`fixed bottom-0 left-0 w-screen h-screen p-2 bg-opacity-40 bg-black flex flex-col ${(flg) ? 'translate-x-full' : 'translate-x-0'} z-10 transition-all duration-500`}>


                <nav className={`flex top-0 left-0 w-full h-screen  gap-4 flex-col ${mode==='light'?'bg-white':'bg-black'} p-4 text-3xl rounded-md`}>

                    <div onClick={toggleSlide} className='p-3 cursor-pointer text-2xl ml-auto'>
                        <IoClose />
                    </div>

                    <a href="#" className="my-font text-5xl w-full text-center py-1">Home</a> <hr/>
                    <a href="#" className="my-font text-5xl w-full text-center py-1">Client</a> <hr/>
                    <a href="#" className="my-font text-5xl w-full text-center py-1">Community</a> <hr/>
                    <a href="#" className="my-font text-5xl w-full text-center py-1">Contect Us</a> <hr/>

                    <div onClick={toggleSec} className={`sec-btn w-6 h-6 ${(mode !== "dark") ? 'bg-black' : 'bg-white'} rounded-full mx-auto`}></div>

                    <div className='flex text-2xl justify-center py-10 gap-5'>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                </nav>



            </div>

        </>
    )
}

export default SideMenu
