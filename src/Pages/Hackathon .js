import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Form from '../Components/Form';


const HackathonPage = () => {
  const main = useRef()
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      

    }, main);

    return () => ctx.revert();
  }, []);

  const [flg, setFlg] = useState(true)

  const handleImageClick = () => {

    console.log(flg)
    if (flg) {
      gsap.to("#moving-img", {
        x: "-100%"
      })
      setFlg(false)
    } else {
      gsap.to('#moving-img', {
        x: 0
      })
      setFlg(true)
    }
  }
  return (
    <div ref={main} className=" h-screen w-full">

      <div className='w-[90%] bg-white h-[30rem] overflow-hidden flex flex-wrap m-auto my-20 relative'>

        <section className={`w-full md:w-2/4 p-8  }`}>

          <Form/>
        </section>


        <div id='moving-img' onClick={handleImageClick} className={`absolute p-2 rounded-xl overflow-hidden w-2/4  h-full right-0`}>
          {flg ? <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hackathon"
            className="w-full h-full cursor-pointer object-cover object-center transition-all"
            
          />
         : <img
            src="https://images.unsplash.com/photo-1571513151379-9612cf354937?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hackathon"
            className="w-full h-full cursor-pointer object-cover object-center transition-all"
            
          />}
          <div className='absolute text-4xl top-2 left-2 cursor-pointer text-white uppercase '> click </div>
        </div>
        <section className={`w-full md:w-2/4 p-8 h-full `}>
          <h2 className="text-3xl font-semibold mb-4">Information about Hackathon</h2>
          <p className="text-gray-700">
            A Hackathon is an exciting event that brings together individuals with diverse skills, a passion for
            problem-solving, and a thirst for innovation. It's a highly interactive and cooperative meeting where
            attendees collaborate to develop original ideas, frequently in a constrained amount of time. Hackathons
            provide people an opportunity to show off their skills and make a difference in solving real-world
            problems while also encouraging creativity, cooperation, and unconventional thinking. Not only is it a
            great chance for programmers to learn about fast ideation and prototype creation, but designers,
            marketers, and thinkers of all stripes are invited as well! We thus cordially welcome you to take part
            in our forthcoming Hackathon if you're a youthful thinker ready to make a significant impact.
          </p>

          {/* <p className="text-gray-700">
            Come along on this thrilling voyage of discovery and invention with us. Your innovative ideas and
            inventive spirit could hold the secret to developing ground-breaking solutions. Join in the excitement
            and let's jointly design the future so you don't miss out!
          </p> */}
        </section>
      </div>

    </div>
  );
};

export default HackathonPage;
