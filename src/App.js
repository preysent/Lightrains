
import './App.css';
import OurServices from './Pages/OurServices';
import Home from './Pages/Home';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CoaderCommunity from './Pages/CoaderCommunity';
import Hackathon from './Pages/Hackathon ';
import AboutUs from './Pages/AboutUs';
import ContectUs from './Pages/ContectUs';
import { useContext } from 'react';
import { Mode } from './context/mode';


function App() {
  gsap.registerPlugin(ScrollTrigger);
  
  const {mode} = useContext(Mode)
  return (
      <div className={`w-full ${mode === 'dark' ? 'bg-black' : 'bg-white'} overflow-hidden`}>
        <Home />
        <OurServices />
        <CoaderCommunity />
        <Hackathon />
        <AboutUs />
        <ContectUs />
      </div>
  );
}

export default App;
