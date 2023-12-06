import { createContext, useState } from "react";
import React from 'react'

export const Mode = createContext()



const Gsap = ({children}) => {
    const [mode, setMode]=useState("dark")
    
    const toggleMode = () =>{
        (mode==='dark')?setMode("light"):setMode("dark")
    }
  return (
    <Mode.Provider value={{mode, toggleMode}}>
      {children}
    </Mode.Provider>
  )
}

export default Gsap
