import React, { useContext, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { Mode } from '../context/mode';
import Card from '../Components/Card';


const OurServices = () => {

    const container = useRef()
    const { mode } = useContext(Mode)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            gsap.from(".heading", {
                scrollTrigger: {
                    trigger: ".heading",
                    start: "top 80%",
                    end: "top 40%",
                    scrub: 1,
                },
                opacity: 0
            });

            // Loop through each card and apply animation
            const cards = document.querySelectorAll(".card");
            cards.forEach((card, index) => {

                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 95%",
                        end: "top 80%",
                        // markers: true,
                        scrub: 3
                    },
                    opacity: 1,
                    y: "35%"
                });

            });
        }, container);

        return () => ctx.revert();
    }, []);

    const toggleLine = (e) => {
        console.log(e.target)
        const mover = document.querySelector('#line-mover')

        gsap.to(mover, { x: 300, scaleX: 5, opacity:1 })

        setTimeout(() => {
            gsap.to(mover, { x: 0, scaleX: 0 })
        }, 500)

    }

    return (
        <section className={`w-full ${(mode === "dark") ? 'bg-black' : 'bg-gray-100'}`}>
            <div ref={container} className="container   py-24 mx-auto">

                <div className=" px-5 lg:px-28 heading flex flex-wrap w-full items-center mb-16">
                    <div className="lg:w-1/2 w-fit mb-6 lg:mb-0">
                        <h1 onMouseEnter={toggleLine} className={`text-5xl self-center lg:text-[4rem]  ${(mode === "dark") ? 'text-white' : 'text-black'} w-fit`}>
                            Our Services
                            <div className="h-[.2rem] w-full bg-black rounded">
                                <div id='line-mover' className='w-5 h-full bg-gray-200 opacity-0'></div>
                            </div>
                        </h1>



                    </div>
                    <p className={`lg:w-1/2 w-full leading-relaxed ${mode === 'dark' ? "text-gray-100" : "text-black"}`}>
                        We create and handle advanced solutions in Blockchain, Smart Contracts, DeFi, AI, ML, Deep Learning, and computer vision at scale.</p>
                </div>

                <div className='max-fit flex w-full'>


                    <div className=' overflow-hidden p-3 grid  md:grid-cols-2 md:content-center content-stretch w-full gap-2 flex-grow'>

                        
                        <Card 
                        title="IoT: " 
                        pera="The usage of IoT in AgriTech is a component of the larger movement toward smart farming, which uses technology to build more effective and sustainable agricultural systems."
                        link="https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        />
                        
                        <Card 
                        title="Artificial Intelligence:" 
                        pera="AI in AgriTech has the potential to improve sustainability, production, and efficiency"
                        link="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        />

                        <Card 
                        title="Machine Learning: " 
                        pera="Machine Learning (ML) is a key component of the agricultural sector transformation, providing answers to a range of problems and increasing productivity."
                        link="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        />

                        <Card 
                        title="Blockchain:" 
                        pera="The creation of industry-wide standards and cooperation amongst many stakeholders are necessary for the implementation of blockchain solutions in the AgriTech sector."
                        link="https://images.unsplash.com/photo-1581464647113-0196a7dc232b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        />


                    </div>

                    <div className=' relative '>
                        <div className={` ${(mode === "dark") ? 'bg-white' : 'bg-black'} w-[1px] mx-3 h-full sticky top-0 py-20`}>

                        </div>
                     
                    </div>


                </div>
            </div>
        </section>
    )
}

export default OurServices
