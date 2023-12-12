import React, { useContext } from 'react'
import ServiceHero from '../../Components/ServiceHero'
import { Mode } from "../../context/mode"

const MlPage = () => {
  const { mode } = useContext(Mode)
  console.log(mode)
  return (
    <section className={`${mode === "dark" ? 'text-white bg-black' : 'text-black bg-white'} body-font w-full bg-cover md:text-center text-justify  pt-[4rem]`}>
      <div className='container min-h-screen font-main1 mx-auto'>
        <ServiceHero
          title='Machine Learning'
          pera='Machine Learning (ML) is a key component of the agricultural sector transformation, providing answers to a range of problems and increasing productivity.'
          link='https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />

        <div className='h-screen'></div>
      </div>
    </section>
  )
}

export default MlPage
