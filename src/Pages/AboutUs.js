import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';

const AboutUs = () => {

    const main = useRef()

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            gsap.from("#about-desc", {
                scrollTrigger: {
                    trigger: "#about-desc",
                    // markers: true,
                    start: 'top 90%',
                    end: "top 0%",
                    scrub: 1
                },
                y: 200
            })

        }, main);

        return () => ctx.revert();
    }, []);


    return (
        <div ref={main}>


            <section class="text-gray-800 body-font relative ">

                <div className='h-full opacity-10'>
                    <img
                        className='object-cover object-center w-full h-full'
                        alt='bg'
                        src='https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                </div>

                <div id='about-desc' class="container px-5 py-16 mx-auto justify-center flex flex-wrap absolute top-0">
                    <h1 className='my-font uppercase font-bold text-[5rem]'>About us</h1>

                    <p className='text-2xl px-5 mb-2 first-letter:text-3xl'>
                        We rethink the process and go beyond traditional methods for acquiring talent. Being at the vanguard of technology and social impact, we take great pride in our ability to recognize and develop a wide pool of talent in blockchain, AI, and ML.

                    </p>
                    <p className='text-2xl px-5 mb-2 first-letter:text-3xl'>
                        We aggressively address urgent national concerns and stay ahead of the curve with an uncompromising drive to continual innovation. By doing this, we improve society and strengthen our standing as a socially conscious digital company.
                    </p>
                    <p className='text-2xl px-5 mb-2 first-letter:text-3xl'>
                        Come along with us, as we transform the talent acquisition industry and change the world with our cutting-edge tactics and socially responsible mindset. By working together, we can reshape technology and define the role of a tech leader.
                    </p>
                </div>
            </section>




            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">

                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">1</div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Our Mission </h2>
                                <p class="leading-relaxed">Empowering people and companies by providing them with easily accessible and user-focused technological solutions. We work to make technology more approachable so that anybody, regardless of skill level, can use innovation to improve their lives and accomplish their objectives.</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">2</div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Our Vision </h2>
                                <p class="leading-relaxed">In our ideal society, technology will be an effortless facilitator, available to everyone, and customized to meet each person's requirements. Our objective is to offer a wide range of tools so that users may tailor and maximize their technological experience in accordance with their particular needs.</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm">3</div>
                        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 class="font-medium title-font text-gray-900 mb-1 text-2xl">Our Values</h2>
                                <ul class="leading-relaxed">
                                    <li> - Innovation Focused on Users</li>
                                    <li> - Superior Security</li>
                                    <li> - Prioritizing simplicity</li>
                                    <li> - Diversity in Technology</li>
                                    <li> - Personalization and Adaptability</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default AboutUs
