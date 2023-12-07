import React, { useContext, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import MovingLine from '../Components/MovintLine';
import img from "../images/tech2.png"
import { Mode } from '../context/mode';

const CoaderCommunity = () => {
  const container = useRef()
  const {mode} = useContext(Mode)
  console.log(mode)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      // Create a timeline for the rotation of #my-element
      var rotateTimeline = gsap.timeline({
        defaults: {
          duration: 1
        },
        scrollTrigger: {
          trigger: ".canvas-container",
          start: "top 0",
          end: "+=200%",
          scrub: 3,
          pin: true,
          // markers: true
        }
      });
      rotateTimeline
        .to(".container1", {
          x: "-110%",
          fontWeight: 100,
          ease: "none"
        },"ok")

        .to('button',{
          x:"100%"
        },"ok")


    }, container);

    return () => ctx.revert();
  }, []);

  return (
  <div ref={container} className={`${mode === "dark"?'bg-black':'bg-white'}`}>

      <MovingLine />

      <div >
        <div className="canvas-container mx-auto mt-8 overflow-hidden w-full h-screen whitespace-nowrap relative">

          <button className={`absolute top-3 left-3 uppercase font-extrabold ${mode==='dark'?'bg-gray-600':'bg-black'} text-gray-200 p-4 rounded-xl cursor-pointer `}>Enroll Now</button>
        
          <div className='absolute top-3 left-3 uppercase font-extrabold text-white p-4 rounded-xl cursor-pointer opacity-40'>
            <img className='w-full h-full object-contain' src={img}/>
          </div>


          <div id='moving-line-poster' className="container1 items-center justify-center m-auto text-[25rem] h-full w-fit uppercase  px-16 ">
            <p className={`${mode === "light"?'text-gray-900':'text-gray-100'}`}>Exciting Opportunities for Creative Minds </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CoaderCommunity
