import React, { useContext, useLayoutEffect, useRef } from 'react'
import SideMenu from './SideMenu';
import { gsap } from 'gsap'
import { Timeline } from '../context/gsap';


const Navbar = () => {

    const nav = useRef()
    const time = useContext(Timeline)
    

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            time.from("#logo",{                
                x: '-100%',
                delay: 1,
                ease: "power1",
                duration: .25,
            })

            time.from("a", {
                y: '-200%',
                ease: "power1",
                duration: .25,
                stagger:.05,
            });

        }, nav);

        return () => ctx.revert();
    }, []);


    return (
        <header ref={nav} className="text-gray-600 body-font sticky top-0 z-30 bg-white ">
            <div className="container mx-auto flex flex-wrap p-[.7rem] md:p-5 md:flex-row items-center justify-between lg:py-2">

                <div className='h-14 overflow-hidden lg:h-12'>
                    <img id='logo' 
                        className='object-contain object-center h-full '
                        src='https://media.licdn.com/dms/image/C4D0BAQFBy9yv2uUPUQ/company-logo_200_200/0/1631347506559?e=2147483647&v=beta&t=fkMzJdnDInolJhg2pkuj8EJk5YyKabYJF6UrWIcH6mE' alt='logo' />
                </div>

                {/* main navbar  */}
                <nav className="lg:flex items-center text-base justify-end gap-16 mr-16 hidden">

                    <a href="#" className="text-[.9rem] cursor-pointer font-semibold hover:text-gray-900">Home</a>
                    <a href="#" className="text-[.9rem] cursor-pointer font-semibold hover:text-gray-900">Client</a>
                    <a href="#" className="text-[.9rem] cursor-pointer font-semibold hover:text-gray-900">Community</a>
                    <a href="#" className="text-[.9rem] cursor-pointer font-semibold hover:text-gray-900">Contect Us</a>
                </nav>

                <div className="text-3xl border-0 py-1 px-3 focus:outline-none md:mt-0 lg:hidden">
                    <SideMenu />
                </div>

            </div>
        </header>
    )
}

export default Navbar
