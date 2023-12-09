import React, { useContext } from 'react';
import { Mode } from '../context/mode';

const Switch = () => {
  const { mode, toggleMode } = useContext(Mode);

  return (
    <>
      <div
        onClick={toggleMode}
        className={`relative w-12 h-7 flex items-center cursor-pointer transition-colors ${
          mode === 'dark' ? 'bg-gray-400' : 'bg-gray-300'
        } rounded-full p-1`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
            mode === 'dark' ? 'translate-x-full' : 'translate-x-0'
          }`}
        ></div>
      </div>
    </>
  );
};

export default Switch;
