import React from 'react'
import SideMenu from './SideMenu';


const Navbar = () => {
    return (
        <header className="text-gray-600 body-font sticky top-0 z-30 bg-white">
            <div className="container mx-auto flex flex-wrap p-[.7rem] md:p-5 md:flex-row items-center justify-between">

                <div className='h-14'>
                    <img
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
