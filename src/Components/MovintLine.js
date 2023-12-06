import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import img1 from "../images/tech1.png"

const MovingLine = () => {
    const container = useRef()
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            gsap.from("#heack-title span", {
                scrollTrigger: {
                    trigger: "#heack-title span",
                    // markers: true,
                    start: "top 90%",
                    end: "top 70%",
                    scrub: 1,
                },
                y: "100%",
                stagger: .1,
                scale: 1.5,
            })

            gsap.to("#teck-bg-1",{
                scrollTrigger:{
                    trigger:"#tech-bg-1",
                    // markers: true,
                    scrub:2

                },
                y:-200
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
            <section className="text-gray-600 body-font w-full bg-cover">
                <div id='tech-bg-1' className='absolute top-0 right-0 opacity-30 z-0 w-[50%]'>
                    <img className='w-full h-full' alt='ok' src={img1}></img>
                </div>
                <div className="container mx-auto   p-16 rounded-3xl items-center ">
                    <h1 id='heack-title' className="text-[4rem] font-bold mb-4 justify-center gap-2 flex overflow-hidden cursor-pointer ">
                        <span>HealthOne</span>
                        <span>Hackathon</span>
                    </h1>
                </div>


                <div className='flex mb-4 overflow-hidden'>

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
