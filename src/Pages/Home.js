import React, { useContext, useLayoutEffect, useRef } from 'react'
import { gsap } from "gsap";
import { Timeline } from '../context/gsap';
import ImageSlider from '../Components/ImageSlider';
import Navbar from '../Components/Navbar';

const Home = () => {

  const main = useRef()
  const time = useContext(Timeline)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      time.from("#title p", {
        y: '100%',
        ease: "power1.in",
        duration: .5
      });
      time.from("#title h1", {
        opacity: 0,
        ease: "power1.in",
        duration: 1,
      });

      // gsap.to("#image-div",{
      //   scrollTrigger:{
      //     trigger:"#image-div",
      //     start:"-20%",
      //     pin:true,
      //     markers:true,
      //     scrub:4,
      //   },
      //   // height:"100vh",
      //   x:"50%",
      //   duration:3,

      // })
    }, main);

    return () => ctx.revert();
  },);



  return (
    <main ref={main} className='bg-white'>
      <Navbar/>

      <div id='title' className=' leading-none p-10 py-12 overflow-hidden'>
        <p className='text-lg'> Blockchain, AI, and Beyond</p>
        <h1 className='text-[5rem] font-bold my-2 '>
          We shape brands for greatness
        </h1>
      </div>

      <ImageSlider />

    </main>
  )
}

export default Home
