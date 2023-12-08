import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

const ImageSlider = () => {

    const container = useRef()
    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            gsap.to('.image-div', {

                duration: 10,
                x: "-100%",
                repeat: -1,
                ease: 'none'

            });
            gsap.to(container.current, {
                scrollTrigger: {
                    trigger: container.current,
                    // markers:true,
                    scrub: 1,
                    start: "top 35%",
                    end: "top 10%",
                },
                y: '-20%'
            })
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className='section flex  overflow-hidden'>

            <div className='image-div h-[30rem] flex-1 whitespace-nowrap bg-red-300'>

                <div className='h-full inline-block w-[30rem]'>
                    <video loop muted >
                        <source src="https://flowstatebranding.com/wp-content/uploads/2021/06/FS-Montage-5_6-1-21-1322_1500px.webm" />
                    </video>
                </div>

                <div className='h-full inline-block w-[30rem]'>
                    <video loop muted >
                        <source src="https://flowstatebranding.com/wp-content/uploads/2021/03/FS-Montage-2_3-1-21-2250.webm" />
                    </video>

                </div>

                <div className='h-full inline-block w-[30rem]'>
                    <video loop muted >
                        <source src="https://flowstatebranding.com/wp-content/uploads/2021/03/FS-Montage-3_3-2-21-0835.webm" />
                    </video>
                </div>

                <div className='h-full inline-block w-[30rem]'>
                    <img className='object-cover object-center w-full h-full' src='https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='hero' />

                </div>


            </div>
            <div className='image-div h-[30rem] flex-1 whitespace-nowrap bg-red-300'>

                <div className='h-full inline-block w-[30rem]'>
                    <video loop muted >
                        <source src="https://flowstatebranding.com/wp-content/uploads/2021/06/FS-Montage-5_6-1-21-1322_1500px.webm" />
                    </video>
                </div>

                <div className='h-full inline-block w-[30rem]'>
                    <video loop muted >
                        <source src="https://flowstatebranding.com/wp-content/uploads/2021/03/FS-Montage-2_3-1-21-2250.webm" />
                    </video>

                </div>

                <div className='h-full inline-block w-[30rem]'>
                    <video loop muted >
                        <source src="https://flowstatebranding.com/wp-content/uploads/2021/03/FS-Montage-3_3-2-21-0835.webm" />
                    </video>
                </div>
                <div className='h-full inline-block w-[30rem]'>
                    <img className='object-cover object-center w-full h-full' src='https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='hero' />

                </div>

            </div>




        </div>

    )
}

export default ImageSlider
