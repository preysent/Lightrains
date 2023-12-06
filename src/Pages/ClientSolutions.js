import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';


const ClientSolutions = () => {

    const container = useRef()
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

    return (
        <>
            <div ref={container} className="container  py-24 mx-auto">
                <div className=" px-5 heading flex flex-wrap w-full items-center mb-16">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className=" text-[4rem] font-medium title-font mb-2 text-gray-900">Our Services</h1>
                        <div className="h-1 w-20 bg-black rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                        We create and handle advanced solutions in Blockchain, Smart Contracts, DeFi, AI, ML, Deep Learning, and computer vision at scale.</p>
                </div>

                <div className='max-fit flex'>


                    <div className='overflow-hidden p-3 grid grid-cols-2 content-center gap-2 flex-grow'>

                        <div className=' max-w-[35vw] max-h-[35rem] card flex-col flex items-center m-auto  bg-white p-5'>

                            <div className=' max-h-full max-w-full'>
                                <img className='object-cover object-center w-full h-full' src='https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                            </div> 

                            <div >
                                <h4 className='underline mt-5 text-lg text-gray-700'>Blockchain Consulting</h4>
                                <p className='text-sm text-gray-400'>Our experienced team builds secure and scalable software,</p>
                            </div>
                        </div>



                        <div className=' max-w-[35vw] max-h-[35rem] card flex-col flex items-center m-auto  bg-white p-5'>

                            <div className=' max-h-full flex-1 max-w-full'>
                                <img className='object-cover object-center w-full h-full' src='https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                            </div>

                            <div >
                                <h4 className='underline mt-5 text-lg text-gray-700'>AI, ML, DL, and CV</h4>
                                <p className='text-sm text-gray-400'>Guiding you with blockchain specialists and seasoned consultants</p>
                            </div>
                        </div>






                        <div className=' max-w-[35vw] max-h-[35rem] card flex-col flex items-center m-auto  bg-white p-5'>

                            <div className=' max-h-full max-w-full'>
                                <img className='object-cover object-center w-full h-full' src='https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                            </div>

                            <div >
                                <h4 className='underline mt-5 text-lg text-gray-700'>Metaverse Development</h4>
                                <p className='text-sm text-gray-400'> guiding you with blockchain specialists and seasoned consultants</p>
                            </div>
                        </div>



                        <div className=' max-w-[35vw] max-h-[35rem] card flex-col flex items-center m-auto  bg-white p-5'>

                            <div className=' max-h-full max-w-full'>
                                <img className='object-cover object-center w-full h-full' src='https://images.unsplash.com/photo-1581464647113-0196a7dc232b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                            </div>

                            <div >
                                <h4 className='underline mt-5 text-lg text-gray-700'>Smart Contract Development</h4>
                                <p className='text-sm text-gray-400'> We implement smart contracts for automating enforcement in Hyperledger,</p>
                            </div>
                        </div>



                        <div className=' max-w-[35vw] max-h-[35rem] card flex-col flex items-center m-auto  bg-white p-5'>

                            <div className=' max-h-full max-w-full'>
                                <img className='object-cover object-center w-full h-full' src='https://images.unsplash.com/photo-1640231912426-0d5feab0b9f9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                            </div>

                            <div >
                                <h4 className='underline mt-5 text-lg text-gray-700'>AMM, DeFi and NFTs </h4>
                                <p className='text-sm text-gray-400'> We implement smart contracts for automating enforcement in Hyperledger,</p>
                            </div>
                        </div>



                    </div>

                    <div className=' relative '>
                        <div className=' bg-black w-[1px] mx-3 h-screen sticky top-0 py-20'>
                            <p className='[writing-mode:vertical-rl] bg-white uppercase  py-2 text-xs text-gray-400 top-32 sticky align-middle translate-x-[-8px]' > featured word </p>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}

export default ClientSolutions
