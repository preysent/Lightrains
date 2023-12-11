import React, { useContext, useLayoutEffect, useRef } from 'react'
import EnquiryForm from '../Components/EnquiryForm '
import { gsap } from 'gsap'
import { Mode } from '../context/mode'

const ContectUs = () => {
    const main = useRef()
    const { mode } = useContext(Mode)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {


            gsap.to('.footer-title', {
                scrollTrigger: {
                    trigger: '#footer',
                    // markers: true,
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
        <div ref={main} className={`${mode === 'dark' ? 'bg-black' : ''}`}>
            <section className={`${mode === 'dark' ? 'text-white bg-black' : 'text-black'} body-font relative max-h-fit`}>
                <div className="container pt-24 mx-auto relative">
                    <EnquiryForm />
                </div>


                <div id='footer' className=' text-[17vw] font-semibold leading-none inline-block whitespace-nowrap overflow-hidden'>
                    <div className='translate-y-[-100%] inline-block footer-title'>L</div>
                    <div className='translate-y-[-100%] inline-block footer-title'>I</div>
                    <div className='translate-y-[-100%] inline-block footer-title'>G</div>
                    <div className='translate-y-[-100%] inline-block footer-title'>H</div>
                    <div className='translate-y-[-100%] inline-block footer-title'>T</div>
                    <div className='translate-y-[-100%] inline-block footer-title'>R</div>
                    <div className='translate-y-[-100%] inline-block footer-title'>A</div>
                    <div className='translate-y-[-100%] inline-block footer-title'>I</div>
                    <div className='translate-y-[-100%] inline-block footer-title'>N</div>
                    <div className='translate-y-[-100%] inline-block footer-title'>S</div>
                </div>

            </section>
        </div>
    )
}

export default ContectUs
