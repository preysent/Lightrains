import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import MovingLine from '../Components/MovintLine';

const CoaderCommunity = () => {
  const container = useRef()
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.from("#title span", {
        scrollTrigger: {
          trigger: "#title span",
          // markers: true,
          start: "top 90%",
          end: "top 70%",
          scrub: 1,
        },
        y: "100%",
        stagger: .1
      })


      gsap.to(".scroll-div", {
        x: "-100%",
        repeat: -1,
        duration: 30,
        ease: "none"
      })

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
    
    <MovingLine/>
      <section
        className="text-gray-600 body-font w-full bg-cover">
        <div className="container mx-auto flex  p-16 rounded-3xl md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>

          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded w-full h-full" alt="hero" src="https://images.unsplash.com/photo-1639628739763-3d4ada1a656a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D" />
          </div>
        </div>
      </section>


      {/* <div className='h-screen bg-red-200'>

        <div className="container mx-auto mt-8">


          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Event Details:</h2>
            <p>Date: [Insert Date]</p>
            <p>Time: [Insert Time]</p>
            <p>Location: [Insert Location]</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Join?</h2>
            <p>
              Participating in the HealthOne Hackathon provides a unique opportunity to work on real-world health challenges, collaborate with like-minded individuals, and gain valuable experience that can boost your career.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Registration:</h2>
            <p>Ready to join the hackathon? Register now!</p>
            <a href="/registration" className="text-blue-500 hover:underline">
              Click here to register
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default CoaderCommunity
