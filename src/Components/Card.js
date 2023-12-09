import React from 'react'

const Card = ({link, title, pera}) => {
  return (
    <>
      <div className='hover:shadow-xl lg:max-w-[35vw] card flex-col flex items-center m-auto  bg-white p-5'>

        <div className=' max-h-full max-w-full'>
          <img alt='ok' className='object-cover object-center w-full h-full' src={link}/>
        </div>

        <div >
          <h4 className='underline mt-5 text-lg text-gray-700'>{title} </h4>
          <p className='text-sm text-gray-400'>{pera}</p>
        </div>
      </div>

    </>
  )
}

export default Card
