import { createContext } from "react";
import React from 'react'
import { gsap } from "gsap";

export const Timeline = createContext()

const t1 = gsap.timeline()


const Gsap = ({children}) => {
  return (
    <Timeline.Provider value={t1}>
      {children}
    </Timeline.Provider>
  )
}

export default Gsap
