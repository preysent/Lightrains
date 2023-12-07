import React, { useContext, useLayoutEffect, useRef } from 'react'
import { gsap } from "gsap";
import { Timeline } from '../context/gsap';
import ImageSlider from '../Components/ImageSlider';
import Navbar from '../Components/Navbar';
import { Mode } from '../context/mode';

const Home = () => {

  const main = useRef()
  const time = useContext(Timeline)
  const {mode} = useContext(Mode)
  console.log(mode)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      time.from("#title p", {
        y: '-100%',
        ease: "power1.in",
        duration: .5
      });
      time.from("#title h1", {
        opacity: 0,
        ease: "power1.in",
        duration: .5,
      });

      gsap.to("#title h1",{
        scrollTrigger:{
          trigger:"#image-div",
          start:"top 0%",
          end: "top -5%",
          scrub:3,
        },
        x:"20%",
        

      })
    }, main);

    return () => ctx.revert();
  },);



  return (
    <main ref={main} className={`${(mode==="light")?'bg-gray-100 text-gray-950':'bg-gray-950 text-gray-100 transition-all'}`}>
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
