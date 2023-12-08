import React, { useContext, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import img1 from "../images/tech1.png"
import { Mode } from '../context/mode';

const MovingLine = () => {

    const { mode } = useContext(Mode)
    const container = useRef()
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            gsap.from("#heack-title", {
                scrollTrigger: {
                    trigger: "#heack-title",
                    // markers: true,
                    start: "top 90%",
                    end: "top 70%",
                    scrub: 1,
                },
                y: "100%",
                stagger: .1,
                scale: 1.5,
            })

            gsap.to("#teck-bg-1", {
                scrollTrigger: {
                    trigger: "#tech-bg-1",
                    // markers: true,
                    scrub: 2

                },
                y: -200
            })



            gsap.to(".scroll-div", {
                x: "-100%",
                repeat: -1,
                duration: 30,
                ease: "none"
            })

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className='relative'>
            <section className={`${mode === "dark" ? 'text-gray-100' : 'text-black'} body-font w-full bg-cover md:text-center text-justify p-5 md:px-12`}>

                <div id='tech-bg-1' className='absolute top-0 right-0 opacity-30 z-0 w-[50%]'>
                    <img className='w-full h-full' alt='ok' src={img1}></img>
                </div>
                <div className="container mx-auto px-4  lg:p-16 rounded-3xl items-center mb-4 w-fit">
                    <p className='text-gray-500 text-center my-4'>Hackathon</p>

                    <h4 id='heack-title' className="text-[2.5rem] text-center md: font-semibold cursor-pointer leading-snug mb-2 main1-font">
                        Explore creative <br className='lg:hidden' />
                        opportunities with us.
                    </h4>
                    <div className="h-[.1rem] bg-black">
                    </div>
                </div>

                <p className='main1-font text-gray-500 lg:hidden'>
                    A Hackathon is an exciting event that brings together individuals with diverse skills, a passion for problem-solving, and a thirst for innovation. It's a highly interactive and cooperative meeting where attendees collaborate to develop original ideas, frequently in a constrained amount of time. Hackathons provide people an opportunity to show off their skills and make a difference in solving real-world problems while also encouraging creativity, cooperation, and unconventional thinking.
                </p>

                <div className=' hidden lg:flex mb-4 overflow-hidden'>

                    <div className=' scroll-div inline-block whitespace-nowrap text-[4rem] space-x-3 text-black uppercase'>
                        <p className='inline-block  hover:text-blue-400 hover:drop-shadow-lg transition-all cursor-pointer'>Professional Development</p>
                        <p className='inline-block hover:text-blue-400 hover:drop-shadow-lg transition-all  cursor-pointer'>-</p>
                        <p className='inline-block hover:text-blue-400 hover:drop-shadow-lg transition-all  cursor-pointer'>Employability Skills</p>
                        <p className='inline-block hover:text-blue-400 hover:drop-shadow-lg transition-all  cursor-pointer'>-</p>
                        <p className='inline-block hover:text-blue-400 hover:drop-shadow-lg transition-all  cursor-pointer'>Mentorship</p>
                        <p className='inline-block hover:text-blue-400 hover:drop-shadow-lg transition-all  cursor-pointer'>-</p>
                        <p className='inline-block hover:text-blue-400 hover:drop-shadow-lg transition-all  cursor-pointer'>Coding Challenges</p>
                        <p className='inline-block hover:text-blue-400 hover:drop-shadow-lg transition-all  cursor-pointer'>-</p>
                        <p className='inline-block hover:text-blue-400 hover:drop-shadow-lg transition-all  cursor-pointer'>Career Advancement</p>
                        <p className='inline-block hover:text-blue-400 hover:drop-shadow-lg transition-all  cursor-pointer'>-</p>
                    </div>



                    <div className=' scroll-div inline-block whitespace-nowrap text-[4rem] space-x-3 text-black uppercase'>
                        <p className='inline-block  hover:text-blue-400 hover:drop-shadow-lg transition-all cursor-pointer'>Professional Development</p>
                        <p className='inline-block  hover:text-blue-400 hover:drop-shadow-lg transition-all cursor-pointer'>-</p>
                        <p className='inline-block  hover:text-blue-400 hover:drop-shadow-lg transition-all cursor-pointer'>Employability Skills</p>
                        <p className='inline-block  hover:text-blue-400 hover:drop-shadow-lg transition-all cursor-pointer'>-</p>
                        <p className='inline-block  hover:text-blue-400 hover:drop-shadow-lg transition-all cursor-pointer'>Mentorship</p>
                        <p className='inline-block  hover:text-blue-400 hover:drop-shadow-lg transition-all cursor-pointer'>-</p>
                        <p className='inline-block  hover:text-blue-400 hover:drop-shadow-lg transition-all cursor-pointer'>Coding Challenges</p>
                        <p className='inline-block  hover:text-blue-400 hover:drop-shadow-lg transition-all cursor-pointer'>-</p>
                        <p className='inline-block  hover:text-blue-400 hover:drop-shadow-lg transition-all cursor-pointer'>Career Advancement</p>
                        <p className='inline-block  hover:text-blue-400 hover:drop-shadow-lg transition-all cursor-pointer'>-</p>
                    </div>

                </div>


            </section>


        </div>
    )
}

export default MovingLine
