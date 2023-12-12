import React, { useContext, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Form from '../../Components/Form';
import { Mode } from '../../context/mode';


const HackathonPage = () => {
  const main = useRef()
  const {mode} = useContext(Mode)
  
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
    <div ref={main} className={`h-fit md:w-[90%] mx-auto ${mode === "dark" ? 'bg-black':'bg-white'}`} >

      <div className=' h-fit  flex flex-wrap m-auto py-20 relative'>

        <div className={`w-full lg:w-2/4 lg:p-8}`}>
          <Form/>
        </div>

        <div id='moving-img' onClick={handleImageClick} className={`absolute p-2 rounded-xl overflow-hidden lg:w-2/4 hidden lg:block h-full right-0`}>
          {flg ? <img
            src="https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hackathon"
            className="w-full h-[75%] cursor-pointer object-cover object-center transition-all"
            
          />
         : <img
            src="https://images.unsplash.com/photo-1571513151379-9612cf354937?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hackathon"
            className="w-full h-[75%] cursor-pointer object-cover object-center transition-all"
            
          />}
          <div className='absolute text-4xl top-2 left-2 cursor-pointer text-white uppercase '> click </div>
        </div>

        <section className={`w-[90%] mx-auto lg:w-2/4 md:p-8 py-10 lg:py-auto h-full ${mode === "dark"?'text-gray-100':'text-black'}`}>
          <h2 className="text-3xl font-semibold mb-4">Information about Hackathon</h2>
          <p >
            A Hackathon is an exciting event that brings together individuals with diverse skills, a passion for
            problem-solving, and a thirst for innovation. It's a highly interactive and cooperative meeting where
            attendees collaborate to develop original ideas, frequently in a constrained amount of time. Hackathons
            provide people an opportunity to show off their skills and make a difference in solving real-world
            problems while also encouraging creativity, cooperation, and unconventional thinking. 
          </p>

          
        </section>
      </div>

    </div>
  );
};

export default HackathonPage;
