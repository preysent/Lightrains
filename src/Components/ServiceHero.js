import React from 'react'

const ServiceHero = ({title, pera, link}) => {
  return (
    <div className='px-7 md:px-9  main1-font '>
      <div className=' flex flex-col items-start gap-7 md:gap-14 py-10 md:flex-row justify-between md:px-[2rem] md:py-20' >
        <h3 className='text-5xl font-semibold md:w-2/5'>
          {title}
        </h3>
        <p className='text-2xl text-left font-extralight md:w-3/5'>
          {pera}
        </p>
      </div>

      <div className='w-full h-48 md:h-96 lg:h-[30rem]'>
        <img
          className='w-full h-full object-cover object-center'
          src={link} alt='banner' />
      </div>

    </div>
  )
}

export default ServiceHero
