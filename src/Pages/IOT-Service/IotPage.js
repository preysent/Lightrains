import React, { useContext } from 'react'
import ServiceHero from '../../Components/ServiceHero'
import { Mode } from "../../context/mode"

const IotPage = () => {
  const { mode } = useContext(Mode)
  console.log(mode)
  return (
    <section className={`${mode === "dark" ? 'text-white bg-black' : 'text-black bg-white'} body-font w-full bg-cover md:text-center text-justify  pt-[4rem]`}>
      <div className='container min-h-screen font-main1 mx-auto'>
        <ServiceHero
          title='IoT'
          pera='The usage of IoT in AgriTech is a component of the larger movement toward smart farming.'
          link='https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />

        <div className='h-screen'></div>
      </div>
    </section>
  )
}

export default IotPage
