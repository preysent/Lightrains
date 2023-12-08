import React, { useContext } from 'react'
import {Mode} from "../context/mode"

const Switch = () => {
    const {mode,toggleMode } = useContext(Mode)
    return (
        <div>
            <div onClick={toggleMode} className={`border-2 ${mode==='dark'?"border-gray-200":'border-gray-600'} w-[3rem] h-[1.5rem] rounded-full `}>

                <div id="switch" className={`w-1/2 h-full  rounded-full  transition-all ${mode === 'dark'?"translate-x-full bg-white":'bg-black'} `}> </div>

            </div>
        </div>
    )
}

export default Switch
