import React from 'react'
import "../Styles/Card.css"
import ArrowButton from './Button'
import { Link } from 'react-router-dom'

const Card = ({ link, title, pera, rout }) => {
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
          <Link to={rout} className="mb-4 ml-auto">
            <ArrowButton />
          </Link>
        </div>
      </section>


    </>
  )
}

export default Card
