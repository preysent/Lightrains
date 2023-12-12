import React, { useContext } from 'react'
import ServiceHero from '../../Components/ServiceHero'
import { Mode } from "../../context/mode"

const AiPage = () => {
  const { mode } = useContext(Mode)
  console.log(mode)
  return (
    <section className={`${mode === "dark" ? 'text-white bg-black' : 'text-black bg-white'} body-font w-full bg-cover md:text-center text-justify  pt-[4rem]`}>
      <div className='container min-h-screen font-main1 mx-auto'>
        <ServiceHero
          title='Artificial Intelligence:'
          pera='AI in AgriTech has the potential to improve sustainability, production, and efficiency'
          link='https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />

        <div className='h-screen'></div>
      </div>
    </section>
  )
}

export default AiPage
