import React from 'react'
import "../Styles/Card.css"
import ArrowButton from './Button'

const Card = ({ link, title, pera }) => {
  return (
    <>
      <section id={title} className="card">
        <img alt='ok' className='object-cover object-center w-full h-full' src={link} />
        <div className="card__content flex flex-col justify-between lg:py-10 p-[1.3rem]" >
          <div>
            <p className="card__title leading-none text-4xl">{title}</p>
            <p className="card__description">
              {pera}
            </p>
          </div>
          <ArrowButton  className="mb-4"/>
        </div>
      </section>


    </>
  )
}

export default Card
