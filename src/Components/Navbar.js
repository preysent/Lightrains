import React, { useContext, useLayoutEffect, useRef } from 'react'
import SideMenu from './SideMenu';
import { gsap } from 'gsap'
import { Timeline } from '../context/gsap';
import { Mode } from '../context/mode';
import logoBlack from "../images/logo-black.jpg"
import logoWhite from "../images/logo-white.jpg"
import Switch from './Switch';


const Navbar = () => {

    const nav = useRef()
    const time = useContext(Timeline)
    const {mode} = useContext(Mode)


    useLayoutEffect(() => {
        let ctx = gsap.context(() => { 

           time.from("h5", {
                y: '-200%',
                ease: "power1",
                duration: .3,
                stagger: .1,
            
            });

        }, nav);

        return () => ctx.revert();
    });
   

    return (
        <header ref={nav} className={`${(mode==="dark")?'text-white bg-black':'text-black bg-gray-100'} body-font fixed w-full top-0 z-30`}>

            <div className={` container mx-auto flex flex-wrap p-[.7rem] md:p-5 md:flex-row items-center justify-between lg:py-2`}>

                <div className='h-14 overflow-hidden lg:h-12'>
                    {mode==="light"
                    ?<img 
                    className='object-contain object-center h-full '
                    src={logoBlack} alt='logo-black' />
                    :<img 
                    className='object-contain object-center h-full '
                    src={logoWhite} alt='logo-white' />}
                </div>

                {/* main navbar  */}
                <nav className="lg:flex items-center text-base justify-end gap-16  hidden">

                    <h5 className="text-[.9rem] cursor-pointer  hover:text-gray-900">Home</h5>
                    <h5 className="text-[.9rem] cursor-pointer  hover:text-gray-900">Client</h5>
                    <h5 className="text-[.9rem] cursor-pointer  hover:text-gray-900">Community</h5>
                    <h5 className="text-[.9rem] cursor-pointer  hover:text-gray-900">Contect Us</h5>

                </nav>



                <div className="text-3xl border-0 py-1 px-3 focus:outline-none md:mt-0 lg:hidden flex gap-3 items-center">
                    <Switch className="md:hidden" />
                    <SideMenu />
                </div>

            </div>
        </header>
    )
}

export default Navbar
