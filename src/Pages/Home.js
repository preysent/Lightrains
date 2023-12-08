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

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      time.from("#title p", {
        y: '-100%',
        ease: "power1.in",
        duration: .5
      });
      time.from("#title h2", {
        opacity: 0,
        ease: "power1.in",
        duration: .5,
      });

      // gsap.to("#title h2",{
      //   scrollTrigger:{
      //     trigger:"#image-div",
      //     start:"top 0%",
      //     end: "top -5%",
      //     scrub:3,
      //   },
      //   x:"20%",  
      // })

      gsap.to('#main-img ',{
        
        scrollTrigger:{
          trigger:'#main-img',
          // markers:true,
          scrub:1,
          end:"top 20%"
        },
        y:0,
      })
        
    }, main);

    return () => ctx.revert();
  },);



  return (
    <main ref={main} className={`${(mode==="light")?'bg-gray-100 text-black':'bg-black text-gray-100 transition-all'}`}>
      <Navbar/>

      <div id='title' className=' leading-tight p-5 py-12 lg:px-10 overflow-hidden'>
        <p className='text-lg '> Lightrains </p>
        <h2 className='text-[14vw] md:text-[10vw] lg:text-[6vw] font-medium  main1-font'>
        Grow smart, Farm simple
        </h2>
      </div>

      <ImageSlider />

      <div id='sub-title' className=' flex flex-col items-center lg:px-28'>
        <p className={` text-3xl px-5 main1-font md:py-8 ${mode==='light'?'text-gray-700':'text-gray-200'}`}> Seeding success:<br/> revolutionizing agriculture with the pinnacle of AI, ML, Blockchain, and IoT Innovations  </p>

        <div id="main-img" className='h-[25rem] lg:h-[35rem] md:h-[30rem] w-full translate-y-[15rem]'>
          <img 
          alt='ai-ml'
          className='h-full w-full object-cover object-center'
          src='https://plus.unsplash.com/premium_photo-1663076367860-3cde6cedaf66?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>
      </div>

    </main>
  )
}

export default Home
