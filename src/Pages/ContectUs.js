import React, { useLayoutEffect, useRef } from 'react'
import EnquiryForm from '../Components/EnquiryForm '
import { gsap } from 'gsap'

const ContectUs = () => {
    const main = useRef()


    useLayoutEffect(() => {
        let ctx = gsap.context(() => {


            gsap.to('.footer-title', {
                scrollTrigger: {
                    trigger: '#footer',
                    markers: true,
                    start: 'top 100%',
                    end: "bottom 100%",
                    scrub: 1,
                },
                y: 0,
                delay: .5,
                stagger: .02,
            })

        }, main);

        return () => ctx.revert();
    }, []);


    return (
        <div ref={main}>
            <section className="text-black body-font relative max-h-screen ">
                <div className="container px-5 pt-24 mx-auto relative">
                    <EnquiryForm />

                    <div id='footer' className=' text-[17vw] font-semibold leading-none inline-block whitespace-nowrap'>
                        {/* <div id='footer-title' className='translate-y-[100%]'> */}
                        <div className='translate-y-[100%] inline-block footer-title'>L</div>
                        <div className='translate-y-[100%] inline-block footer-title'>I</div>
                        <div className='translate-y-[100%] inline-block footer-title'>G</div>
                        <div className='translate-y-[100%] inline-block footer-title'>H</div>
                        <div className='translate-y-[100%] inline-block footer-title'>T</div>
                        <div className='translate-y-[100%] inline-block footer-title'>R</div>
                        <div className='translate-y-[100%] inline-block footer-title'>A</div>
                        <div className='translate-y-[100%] inline-block footer-title'>I</div>
                        <div className='translate-y-[100%] inline-block footer-title'>N</div>
                        <div className='translate-y-[100%] inline-block footer-title'>S</div>
                        {/* </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContectUs
